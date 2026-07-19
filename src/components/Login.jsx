import React from 'react'

const Login = () => {
    //Conditional Rendering using if...else
    const isLoggedIn = true;

    if(isLoggedIn){
       return <h2>Welcome Gansagor!</h2>

    }

  return (
    <div>
        <h2>Please Login</h2>
    </div>
  )
}

export default Login