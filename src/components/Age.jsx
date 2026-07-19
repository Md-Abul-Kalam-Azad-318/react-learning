import React from 'react'

const Age = () => {
//Conditional Rendering using ternary operator
    const age = 40;


  return (
    <div>
        {
            age>=18
                ? <h2>Adult</h2>
                : <h2>Minor</h2>
        }
    </div>
  )
}

export default Age