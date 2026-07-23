//Example 2 - Update the page title
import React, { useEffect } from 'react'

const Title = () => {

    useEffect(() =>{
        document.title = "React Learning App";
    }, []);

  return (
    <div>
        <h2>Page title updated; Please check the browser tab.</h2>
    </div>
  )
}

export default Title