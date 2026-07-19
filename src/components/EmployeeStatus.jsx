import React from 'react'

const EmployeeStatus = () => {

    //Conditioning Rendering using ternay operator
    const working = false;

  return (
    <div>
        {
            working
                ? <h2>Present</h2>
                : <h2>Absent</h2>
        }
    </div>
  )
}

export default EmployeeStatus