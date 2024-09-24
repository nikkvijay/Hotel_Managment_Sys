import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './StaffScheduler.css';


const StaffScheduler = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredTasks, setFilteredTasks] = useState([]);

  // Fetch tasks from Strapi
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/tasks?populate=*');
        setTasks(response.data.data); // Strapi stores task data inside response.data.data
        imgUrl = response.data.data[0].attributes.eimage.data.attributes.url;
        
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  // Filter tasks based on the selected date
  useEffect(() => {
    const filtered = tasks.filter(
      (task) =>
        new Date(task.attributes.date).toDateString() === selectedDate.toDateString()
    );
    setFilteredTasks(filtered);
  }, [selectedDate, tasks]);

  // Handle date change
  const onDateChange = (date) => {
    setSelectedDate(date);
  };

  // Highlight dates with tasks in the calendar
  const tileClassName = ({ date }) => {
    const hasTask = tasks.some(
      (task) => new Date(task.attributes.date).toDateString() === date.toDateString()
    );
    return hasTask ? 'highlight' : '';
  };

  return (
    <div className="scheduler-container">
      <div className="calendar-container">
        <Calendar
          onChange={onDateChange}
          value={selectedDate}
          tileClassName={tileClassName}
        />
      </div>

      <div className="timeline mt-4">
        <h2>Schedule for {selectedDate.toDateString()}</h2>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div key={task.id} className="task-card">
              <div className="task-time">
                {new Date(task.attributes.date).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
              <div className="task-content">
                <div className="profile-section">
                  <img
                    src={task.attributes.eimage 
                      ? `http://localhost:1337${task?.attributes?.eimage?.data?.attributes?.url}`
                      : 'https://via.placeholder.com/40'}
                    alt="Profile"
                    className="profile-img w-12 h-12"
                  />
                  <div className="profile-info">
                    <p className="username">
                      {task.attributes.assignedTo || 'No Assignee'}
                    </p>
                    <p className="department">
                      {task.attributes.department || 'No Department'}
                    </p>
                  </div>
                </div>
                <div className="task-details">
                  <p className="task-title">{task.attributes.title || 'No Title'}</p>
                  <p
                    className={`task-status ${
                      task.attributes.status === 'completed'
                        ? 'completed'
                        : 'new-task'
                    }`}
                  >
                    {task.attributes.status || 'No Status'}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No tasks for this date.</p>
        )}
      </div>
    </div>
  );
};

export default StaffScheduler;
