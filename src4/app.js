// this is where we import all components


import React from 'react';
import Siteheader from './component/Siteheader';
import Game from './component/Game';



let style={
    color:'Black'
}

// App is a component
const App =()=>{
    // return <h1 style={style}>Hello React World </h1>
    return(

  // Siteheadder title= this will be in object format       
    <div><Siteheader title='Tic-Tac-Toe'/>
               <Game/>
    
    </div> 
    )
}
// exporting the component App
export default App;