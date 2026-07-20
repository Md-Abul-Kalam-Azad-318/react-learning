import React from 'react'
import { useState } from 'react'

const MachineInput = () => {

    const [machine, setMachine] = useState("")

  return (
    <div>
        <h2>Machine Input</h2>

        <input 
        type="text"
        placeholder = "Enter the machine name"
        value = {machine} 
        onChange={(event) => setMachine(event.target.value)}
        />
        <h3>Machine: {machine}</h3>
    </div>
  )
}

export default MachineInput