import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div>
        <Navbar />

        <hr />

        <main>
          <Outlet />
        </main>
        
    </div>
  );
}

export default MainLayout;