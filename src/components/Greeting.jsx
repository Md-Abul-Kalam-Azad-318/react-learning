import React from 'react'

function Greeting({name, profession, country}) {
  
  return (
    <div>
        
        <h2>{name}</h2>
        <p>Profession: {profession}</p>
        <p>Country: {country}</p>
        <hr />
    </div>
  )
}

export default Greeting