// src/components/RequestList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RequestList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/customer-service/category/General Queries`, 
          { withCredentials: true }
        );
        setRequests(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchRequests();
  }, []);

  return (
    <div>
      <h2>Customer Service Requests</h2>
      <ul>
        {requests.map(request => (
          <li key={request._id}>{request.comments}</li>
        ))}
      </ul>
    </div>
  );
};

export default RequestList;
