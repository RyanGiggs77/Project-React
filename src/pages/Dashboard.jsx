import React from 'react';
import ChartComponent from '../chart/Chart1.jsx';

const Dashboard = () => {
  return (
    <div className="p-5 bg-costum-white min-h-screen">
      <div className="bg-white p-5 shadow-md rounded-lg">
        
        <ChartComponent />
      </div>
    </div>
  );
};

export default Dashboard;
