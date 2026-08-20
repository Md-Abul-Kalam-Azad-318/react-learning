import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { users } from '../data/users';

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
        <h2>Users Page</h2>
        <p>Query string: {searchParams.toString()}</p>
        <p>Has role: {searchParams.has("role") ? "Yes": "No"}</p>
        <p>Has age: {searchParams.has("age") ? "Yes": "No"}</p>

        {/* <p>Name: {searchParams.get("name")}</p>
        <p>Role: {searchParams.get("role") || 
          "Not specified"}</p> */}

        <button onClick={() =>setSearchParams({name: "Alice", role: "Admin"})}>
          Set Alice as Admin
        </button>

        <button onClick={() =>setSearchParams({name: "Bob", role: "User"})}>
          Set Bob as User
        </button>
        
        <button onClick={() =>{
          setSearchParams({name: "Bob"});
        }}
        >
          Clear Role
        </button>

        <button onClick={() =>{
          setSearchParams((params) =>{
            params.set("role", "Admin");
            return params;
          });
        }}
        >
          Make Admin
        </button>
  
         <h3>Users</h3>
         
          {/* {users.map((user) =>(
            <li key={user.id}>
              <NavLink to = {`/dashboard/user/${user.id}?tab=${user.tab}`}>
              {user.name}
              </NavLink> 
            </li>
          ))} */}

          {users.map((user) =>(
            <li key = {user.id}>
              <NavLink to = {`/dashboard/user/${user.id}?tab=${user.tab}`}
              style = {({isActive}) =>({
                  color:isActive? "red" : "blue",
                  fontWeight: isActive? 
                  "bold":"normal"
              })}
              >
              {user.name}
              </NavLink>
            </li> 
            
          ))}
  </div>
  );
}
export default Users;
