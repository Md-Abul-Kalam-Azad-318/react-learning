import React from 'react'

const MachineList = () => {
    const machines = [
        'Hydrapulper',
        'Refiner',
        'Headbox',
        'Press Section',
        'Dryer Section',
        'Reel',
        'Rewinder Section'
    ];


  return (
    <div>
        <h2>Machine List</h2>

        {
            machines.map((machine, index) => (
                
                <p key={index}> {machine} </p>

            ))
        }
    </div>
  );
}

export default MachineList