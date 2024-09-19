import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

 
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/bookings?populate=*');
        setBookings(response.data.data);  
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="max-w-6xl py-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Booking List</h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr className="text-left text-gray-700">
                <th className="px-4 py-2 font-medium">Name</th>
                <th className="px-4 py-2 font-medium">Room No</th>
                <th className="px-4 py-2 font-medium">Room Type</th>
                <th className="px-4 py-2 font-medium">Visit Date</th>
                <th className="px-4 py-2 font-medium">Booked Date</th>
                <th className="px-4 py-2 font-medium">Payment Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {bookings.map(booking => (
                <tr key={booking.id} className="bg-white">
                  <td className="px-4 py-2 whitespace-nowrap">{booking.attributes.name}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{booking.attributes.roomNumber}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{booking.attributes.roomType}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{booking.attributes.visitDate}</td>
                  <td className="px-4 py-2 whitespace-nowrap">{booking.attributes.bookedDate}</td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${booking.attributes.paymentStatus === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {booking.attributes.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
