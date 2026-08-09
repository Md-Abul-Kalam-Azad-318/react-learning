import React from 'react'
import {Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import User from "./pages/User";
import NotFound from "./pages/NotFound";

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Reports from './pages/Reports';


const App = () => {
  return (
    <div>
        <Navbar />
        
        <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/services" element = {<Services />} />
        <Route path = "/contact" element = {<Contact/>} />
        <Route path="/login" element = {<Login />}/>

        <Route path = "/user/:id" element = {<User />}/>

        <Route path="*" element = {<NotFound />} />

        <Route path = "/dashboard" element = {<Dashboard />}>
            <Route path = "profile" element = {<Profile />} />
            <Route path = "settings" element = {<Settings />}/>
            <Route path = "reports" element = {<Reports />}/>
        </Route>
    </Routes>  
    </div>
  );
}

export default App;



