//Example 1 - Run only once

import React from 'react'
import {useEffect} from "react";

const Welcome = () => {

    useEffect(() => {
        console.log("Component Loaded");
    }, []);

  return (
    <div>
        <h2>Welcome to React</h2>
    </div>
  )
}

export default Welcome