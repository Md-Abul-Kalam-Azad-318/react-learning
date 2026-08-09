import React from 'react'
import { NavLink } from 'react-router-dom';

function DashboardNav() {
  return (
    <nav>
       <NavLink to = "/dashboard/profile" className={({isActive}) => isActive? "active": ""}>Profile</NavLink> { " | " }
       <NavLink to = "/dashboard/settings" className={({isActive}) => isActive? "active": ""}>Settings</NavLink> {" | "}
       <NavLink to = "/dashboard/reports" className={({isActive}) => isActive? "active": ""}>Reports</NavLink>
    </nav>
  );
}

export default DashboardNav;