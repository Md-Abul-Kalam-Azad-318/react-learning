//Practice Exercises, Exercise 1
import React, { useEffect } from 'react'

function Message() {
    useEffect(() =>{
        console.log("Application Loaded");
    }, []);
  return (
    <div>
        <h2>React Started</h2>
    </div>
  )
}

export default Message