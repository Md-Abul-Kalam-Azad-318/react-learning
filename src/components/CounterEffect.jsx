// Practise Exercise, Exercise 3
import React, { useEffect, useState } from 'react'

const CounterEffect = () => {

const [count, setCount]= useState(5);

useEffect(() =>{
    console.log("Application Loaded")
}, [count]);

  return (
    <div>
        <h2>Current Count: {count}</h2>

        <button onClick={() =>setCount(count + 1)}>
            Increase
        </button> &nbsp; &nbsp;
         <button onClick={() =>setCount(count - 1)}>
            Decrease
        </button>
    </div>
  )
}

export default CounterEffect