import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();
    function handleLogin(){
        alert("Login Successful");
        navigate("/");
    }

  return (
    <div>
        <button 
        onClick={handleLogin}>
            Login
        </button>
    </div>
  );
}

export default Login;