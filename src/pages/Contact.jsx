import React from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();
    function submitForm(){
      alert("Message Sent");
      navigate("/");
    }

  return (
    <div>
        <h1>Contact Page</h1>
        <p>Contact us anytime.</p>

        <button onClick={submitForm}>Submit</button>
    </div>
  );
}

export default Contact;