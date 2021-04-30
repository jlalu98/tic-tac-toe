// this is where we import all components


import React from 'react';
import Siteheader from './component/Siteheader';
import values from './component/Game';
import Timer from "./component/timer-component"


let style={
    color:'Black'
}

// App is a component
const App =()=>{
    // return <h1 style={style}>Hello React World </h1>
    return(

  // Siteheadder title= this will be in object format       
    <div><Siteheader title='Tic-Tac-Toe'/>
               <values.GameBoard/>
               <Timer/> <Timer/> 
    
    </div> 
    )
}
// exporting the component App
export default App;