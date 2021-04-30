import React from "react";

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            timer:0,
            setTimer:0,
            isActive:false,
            isPaused:false,
        }
    }
    render(){
   let {label,timer, isActive, isPaused, handleStart, handlePause, handleResume,formatTime}= this.props;
    formatTime = (timer) => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
      
        return `${getMinutes} : ${getSeconds}`
      }
        return(
            <>
            <p>{label}</p>
            <p>{formatTime(timer)}</p>
            {
                !isActive&&!isPaused ?
                handleStart:(isPaused?handlePause:handleResume)
            }
            </>
        );
    }
}
export default Timer;