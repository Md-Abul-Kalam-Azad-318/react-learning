import React from 'react'
import { NavLink } from 'react-router-dom';
import './DashboardNav.css';

function DashboardNav() {
  return (
    <nav className="dashboard-nav">
       <NavLink to = "/dashboard/profile" className={({isActive}) => isActive? "active": ""}>Profile</NavLink> { " | " }
       <NavLink to = "/dashboard/settings" className={({isActive}) => isActive? "active": ""}>Settings</NavLink> {" | "}
       <NavLink to = "/dashboard/reports" className={({isActive}) => isActive? "active": ""}>Reports</NavLink> {" | "}
       <NavLink to = "/dashboard/users" end className={({isActive}) => isActive? "active": ""}>Users</NavLink>
    </nav>
  );
}

export default DashboardNav;