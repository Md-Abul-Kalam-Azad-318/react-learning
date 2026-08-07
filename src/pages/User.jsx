import React from 'react'
import { useParams } from 'react-router-dom';

function User() {

    //const params = useParams();
    const {id} = useParams();

  return (
    <div>
        <h1>User Page</h1>

        {/* <h2>User ID: {params.id}</h2> */}
        <h2>User ID: {id}</h2>

    </div>
  );
}

export default User;