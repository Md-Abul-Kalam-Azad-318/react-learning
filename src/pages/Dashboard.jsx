import React from 'react'
import { Outlet } from 'react-router-dom';
import DashboardNav from '../components/DashboardNav';

function Dashboard() {
  return (
    <div>
       <h1>Dashboard</h1> 
       <DashboardNav />

       <hr />

       <Outlet />
    </div>
  );
}

export default Dashboard;