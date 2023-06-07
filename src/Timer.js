import React from 'react'
import Countdown from 'react-countdown';

const Timer = () => {
    const renderer = ({ hours, minutes, seconds }) => {
  

    // Render a countdown
    return (
        // <span>
        //   {hours}:{minutes}:{seconds}
        // </span>
  
        <div>
         <span className="timer-style">{hours}</span>:<span className='timer-style'>{minutes}</span>:<span className='timer-style'>{seconds}</span>
   
        </div>
        );
  
    }
    return (
      <Countdown date={Date.now() + 210000} renderer={renderer} />
    )
  }
  
  export default Timer