import React from 'react'
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {users}  from '../data/users';


function User() {

    //const params = useParams();
    const {id} = useParams();
    const [searchParams] = useSearchParams();
    const user = users.find(
      (user) =>user.id === Number(id)
    );

    const tab = searchParams.get("tab");
  return (
    <div>
        <nav>
          {users.map((user) =>(
            <NavLink 
            key={user.id}
            to={`/dashboard/user/${user.id}?tab=${user.tab}`}
            style={({isActive}) =>({
              color: isActive? "red" : "blue",
              fontWeight: isActive? "bold" : "normal",
              marginRight: "15px"
            })}
            >
              {user.name}
            </NavLink>
          ))}
        </nav>

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