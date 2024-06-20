// src/components/CustomerServiceForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CustomerServiceForm = () => {
  const [category, setCategory] = useState('General Queries');
  const [comments, setComments] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/customer-service/submit`, 
        { category, comments },
        { withCredentials: true }
      );
      alert('Request submitted successfully');
    } catch (err) {
      console.error(err);
      alert('Failed to submit request');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Customer Service Request</h2>
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="General Queries">General Queries</option>
          <option value="Product Features Queries">Product Features Queries</option>
          <option value="Product Pricing Queries">Product Pricing Queries</option>
          <option value="Product Feature Implementation Requests">Product Feature Implementation Requests</option>
        </select>
      </label>
      <label>
        Comments:
        <textarea value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerServiceForm;
