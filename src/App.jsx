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
    </Routes>  
    </div>
  );
}

export default App;



