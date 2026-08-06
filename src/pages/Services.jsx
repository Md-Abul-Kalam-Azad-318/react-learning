import React from 'react';
import { useNavigate } from 'react-router-dom';

function Services() {

  const navigate = useNavigate();

  return (
    <div>
        <h1>Services Page</h1>
        <p>We provide different services.</p>

        <button onClick={() =>navigate(-1)}>
          Back
          </button>
          {"  "}

        <button onClick={() =>navigate(1)}>
          Forward
          </button>
    </div>
  );
}

export default Services;