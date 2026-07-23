//Practice Exercises, Exercise 2
import React, { useEffect } from 'react'

const TitleChange = () => {

    useEffect(() =>{
        document.title = "Paper Mill Dashboard"
    }, []);

  return (
    <div>
        <h2>Check the browser.</h2>
    </div>
  )
}

export default TitleChange