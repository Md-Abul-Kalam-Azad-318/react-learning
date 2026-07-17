import React from 'react'

const EmployeeList = () => {

    const employees = [
        'Manager',
        'Engineer',
        'Operator',
        'Supervisor',
        'Technician'
    ];

  return (
    <div>
        <h2>Employee List</h2>

        {
            employees.map( (employee, index) => (
                    <p key={index}> {employee} </p>
            ) )

        }
    </div>
  );
}

export default EmployeeList