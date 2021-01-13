import React, {useState} from 'react'

function SnoozeRemaining() {
    const initialSnooze = () => Number(window.localStorage.getItem('snooze-preference') | 0);
    const [timeRemaining, setTimeRemaining] = useState(initialSnooze)
    const incrementTimeRemaining = (value) => {
        setTimeRemaining(previousRemaining => previousRemaining + value)  
    }
    const cancelSnooze = () => setTimeRemaining(0)
    return (
      <>
        <div>{timeRemaining}</div>
        <button onClick={() => incrementTimeRemaining(1)}>Add one minute</button>
        <button onClick={() => incrementTimeRemaining(2)}>Add two minutes</button>
        <button onClick={() => cancelSnooze()}>Cancel snooze</button>
      </>
    )
  }

export default SnoozeRemaining
