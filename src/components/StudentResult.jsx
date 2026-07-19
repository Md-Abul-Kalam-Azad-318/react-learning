import React from 'react'

const StudentResult = () => {

    //Conditioning Rendering using ternary operator
    const marks = 39;

  return (
    <div>
        {
            marks>=40
                ? <h2>Pass</h2>
                : <h2>Fail</h2>
        }
    </div>
  )
}

export default StudentResult