import React from 'react'
import {useState} from 'react';

const CountryInput = () => {

    const [country, setCountry] = useState("");

  return (
    <div>
        <h2>Country Input</h2>

        <input 
        type="text"
        placeholder = "Enter your country name"
        value = {country} 
        onChange={(event) =>setCountry(event.target.value)}
        />
        <h3>Country: {country}</h3>
    </div>
  )
}

export default CountryInput