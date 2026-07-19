import React from 'react'

const Temperature = () => {
   //Conditional Rendering using if...else 
    const temp = 36;
    if(temp>35){
        return <h2>Hot Weather</h2>
    }

  return (
    <div>
        <h2>Cool Weather</h2>
    </div>
  )
}

export default Temperature