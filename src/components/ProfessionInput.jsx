import React from 'react'
import {useState} from 'react';

const ProfessionInput = () => {

    const [profession, setProfession] = useState("")

  return (
    <div>
        <h2>Profession Input</h2>

        <input 
        type="text"
        placeholder='Enter your profession'
        value = {profession}
        onChange={(event) => setProfession(event.target.value)}  

        />
        <h3>Profession: {profession}</h3>
    </div>
  )
}

export default ProfessionInput