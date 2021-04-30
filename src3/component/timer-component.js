/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from 'react';

function timer(){
    const [time,setTime] = useState(0);
    const [timeerOn,setTimeOn] = useState(0);
    React.useEffect(()=>{
        
    },[]);
    //this function runs as soon as component is rendered
    return(
    <div>
        <div>{time}</div>
        <div>
            <button onClick={()=>setTimeOn(true)}>Start</button>
            <button onClick={()=>setTimeOn(false)}>Stop</button>
            <button onClick={()=>setTimeOn(true)}>Resume</button>
            <button onClick={()=>setTime(0)}>Reset</button>
            
        </div>
    </div>

);
}
export default timer;