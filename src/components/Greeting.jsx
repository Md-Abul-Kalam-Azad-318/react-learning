import React from 'react'

function Greeting(props) {
    console.log(props);
  return (
    <div>
        <h2>Hello, {props.name}</h2>
    </div>
  )
}

export default Greeting