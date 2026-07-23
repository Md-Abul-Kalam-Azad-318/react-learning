//Example 3 - Using State with useEffect
import React, {useState, useEffect } from 'react'

function Counter() {

const [count, setCount] = useState(0);

useEffect(() =>{
  console.log("Count changed.");
}, [count]);


  return (
    <div>
        <h2>Count: {count}</h2>

        <button onClick={() => setCount(count + 1)}>Increase</button> &nbsp; &nbsp;
        <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

export default Counter