import React, { useState } from 'react';

function DelayedCounter() {
  const [count, setCount] = useState(0);
  const increment = async () => {
    //   await doSomethingAsync()
    setCount(previousCount => previousCount + 1);
  };
  return <button onClick={increment}>{count}</button>;
}

export default DelayedCounter;
