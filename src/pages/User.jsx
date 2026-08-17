import React from 'react'
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


function User() {

  const users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Charlie"},
    {id: 4, name: "Azad"},
    {id: 5, name: "Sakib"},
    {id: 6, name: "Hasan"}
  ]
    //const params = useParams();
    const {id} = useParams();
    const [searchParams] = useSearchParams();
    const user = users.find(
      (user) =>user.id === Number(id)
    );

    const tab = searchParams.get("tab");
  return (
    <div>
        <h2>User Page</h2>
        {/* <h2>User ID: {params.id}</h2> */}
        {/* <h2>User ID: {id}</h2>
        <p>Wecome to User {id}'s profile.</p> */}
        
        {
          user? (<p>Welcome, {user.name}</p>): (<p>User not found.</p>)
        }

        <p>User ID: {id}</p>
        <p>Selected Tab: {tab}</p>
    </div>
  );
}
export default User;