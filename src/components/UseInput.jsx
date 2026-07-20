import React from 'react'
import {useState} from 'react';

const UserInput = () => {

    const [name, setName] = useState("");

  return (
    <div>
        <h2>User Input Example</h2>

        <input 
        type="text"
        placeholder = "Enter your name"
        value = {name}
        onChange={(event) => setName(event.target.value) }

         />

         <h3>Hello, {name}</h3>
    </div>
  )
}

export default UserInput