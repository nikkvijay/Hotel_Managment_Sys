import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import TailwindSelector from './MonthsSelector'; 

const CampaignOverviewChart = () => {
  const [allData, setAllData] = useState([]);  
  const [data, setData] = useState([]);        

 
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:1337/api/room-stats'); 
      const roomData = response.data.data.map(item => ({
        month: item.attributes.month,
        roomVisited: item.attributes.roomVisited,
        roomBooked: item.attributes.roomBooked
      }));
      setAllData(roomData);  
      setData(roomData);    
    } catch (error) {
      console.error('Error fetching data from Strapi:', error);
    }
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  
  const handleMonthChange = (month) => {
    if (month === '') {
     
      setData(allData);
    } else {
      
      const filteredData = allData.filter(d => d.month === month);
      setData(filteredData);
    }
  };

  return (
    <div className="p-5 bg-white shadow-lg rounded-lg ">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold text-gray-700">Campaign Overview</h2>
        <TailwindSelector onMonthChange={handleMonthChange} />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <span className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div> Room Visited
        </span>
        <span className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-800 rounded-full"></div> Room Booked
        </span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 200]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="roomVisited" stroke="#FF5733" activeDot={{ r: 8 }} />  
          <Line type="monotone" dataKey="roomBooked" stroke="#900C3F" /> 
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CampaignOverviewChart;
