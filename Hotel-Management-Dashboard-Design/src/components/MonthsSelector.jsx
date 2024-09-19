import React from 'react';

const MonthsSelector = ({ onMonthChange }) => {
  return (
    <select
      className="border border-gray-300 rounded-md text-gray-700 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
      onChange={(e) => onMonthChange(e.target.value)}
    >
      <option value="">Select a Month</option>
      
      <option value="Jan">January</option>
      <option value="Feb">February</option>
      <option value="Mar">March</option>
      <option value="Apr">April</option>
      <option value="May">May</option>
      <option value="Jun">June</option>
      <option value="Jul">July</option>
      <option value="Aug">Aug</option>
      <option value="Sept">September</option>
      <option value="Oct">October</option>
      <option value="Nov">November</option>
      <option value="Dec">December</option>
      
    </select>
  );
};

export default MonthsSelector;
