import React from 'react'
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
       <h1>Dashboard</h1> 

       <hr />

       <Outlet />
    </div>
  );
}

export default Dashboard;