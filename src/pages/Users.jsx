import React from 'react';
import { useSearchParams } from 'react-router-dom';

function Users() {

  const [searchParams] = useSearchParams();

  return (
    <div>
        <h2>Users Page</h2>

        <p>Name: {searchParams.get("name")}</p>
        <p>Role: {searchParams.get("role") || 
          "Not specified"}</p>
    </div>
  );
}

export default Users;