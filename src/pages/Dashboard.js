// src/pages/Dashboard.js
import React from 'react';
import CustomerServiceForm from '../components/CustomerServiceForm';
import RequestList from '../components/RequestList';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <CustomerServiceForm />
      <RequestList />
    </div>
  );
};

export default Dashboard;
