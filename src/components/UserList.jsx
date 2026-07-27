import React, { useEffect, useState } from 'react'

const UserList = () => {

    const [users, setUsers] = useState([]);
    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data =>{
                setUsers(data);
                console.log(data);
            });
    }, []);


  return (
    <div>
        <h2>User List</h2>

        {
            users.map((user) =>(
                <p key={user.id}>{user.name}</p>
            ))
        }
    </div>
  )
}

export default UserList