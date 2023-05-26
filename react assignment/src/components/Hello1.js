import React, { useState } from 'react'

const Hello1 = () => {
     const [backgrounddark, backgroundlight] = useState(false);
     const toggle = () => {
          backgroundlight(!backgrounddark);

     };
     const backgroundColor = backgrounddark ? 'red' : 'black';

     const styling = {
          backgroundColor:'blue',
          color: 'white',
          borderRadius: '10vh',
          cursor:'pointer',
          padding: '10px',
          border: 'none',
          fontSize: '20px',
          width: '50vh',
     }

     return (
       
          <div style={{ backgroundColor, minWidth:'140vh' , minHeight:'100vh' }}>
            <button style={styling} onClick={toggle}> background changer </button>
      
    </div>
  )
}

export default Hello1
