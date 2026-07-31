import React, { useEffect, useState } from 'react'

const UsersListError = () => {
   
    const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");
    
   useEffect(() =>{

    const fetchUsers = async()=>{

        try{
          const respone = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            if(!respone.ok){
                throw new Error("Request failed");
            }
            const data = await respone.json();
            setUsers(data);
            setLoading(false);
        }
        catch(error){
            setError("Failed to load users.");
            setLoading(false);
        }

    };
    fetchUsers();

   }, []);

   if(loading){
        return <h2>Loading users...</h2>
   }
   if(error){
        return <h2>{error}</h2>
   }


  return (
    <div>
        <h2>User List Error</h2>

        {
            users
                .map((user) =>(
                <p key={user.id}>{user.name}</p>
            ))
        }
    </div>
  )
}

export default UsersListError