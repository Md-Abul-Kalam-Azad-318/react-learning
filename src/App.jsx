import React from 'react'
import {Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import MainLayout from './components/MainLayout';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import User from "./pages/User";
import Users from "./pages/Users"
import NotFound from "./pages/NotFound";

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Reports from './pages/Reports';


const App = () => {
  return (
    <div>
        
      <Routes>
        <Route element = {<MainLayout />}>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/services" element = {<Services />} />
          <Route path = "/contact" element = {<Contact/>} />
          <Route path="/login" element = {<Login />}/>

          <Route path = "/dashboard" element = {<Dashboard />}>
            <Route index element = {<Profile />}/>
            <Route path = "profile" element = {<Profile />} />
            <Route path = "settings" element = {<Settings />}/>
            <Route path = "reports" element = {<Reports />}/>
            <Route path = "user/:id" element = {<User />}/>
            <Route path = "users" element = {<Users />}/>
        </Route>
        </Route> 

        <Route path = "/user/:id" element = {<User />}/>

        <Route path="*" element = {<NotFound />} />

        
    </Routes>  
    </div>
  );
}

export default App;



