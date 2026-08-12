import React from 'react'
import {useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

function Profile() {

    const navigate = useNavigate();
    // const location = useLocation();

  return (
    <div>
      <h2>Profile Page</h2>

      {/* <button onClick={() =>navigate("/dashboard")}>
        Back to Dashboard
      </button> */}

      {/* <button onClick={() => navigate(-1)}>
        Go Back
      </button> */}

      <button onClick={() =>navigate("/dashboard", 
      {replace : true })}>
        Back to Dashboard
      </button>
      {/* <p>Current path: {location.pathname}</p> */}

      {/* <p>Path: {location.pathname}</p>
      <p>Search: {location.search}</p>
      <p>Hash: {location.hash}</p>
     */}
    </div>
  );
  
}

export default Profile;