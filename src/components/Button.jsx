import React from 'react'

function Button() {

    function showMessage(){
        alert("Welcome to React");
    }

  return (
    <div>
        <button 
        onClick={showMessage}
        >Click Me</button>
    </div>
  )
}

export default Button