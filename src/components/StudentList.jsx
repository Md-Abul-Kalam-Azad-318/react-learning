import React from 'react'

const StudentList = () => {
    const students = [

        'Azad',
        'Rahim',
        'Karim',
        'Hasan',
        'Sakib',
        'Kibria',
        'Sumon'
    ];


  return (
    <div>
        <h2>Student List</h2>

        {
            students.map( (student, index) =>(
                <p key = {index}> {student} </p>

            ) )
        }
    </div>
  );
}

export default StudentList;