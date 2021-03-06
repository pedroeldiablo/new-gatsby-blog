import React, { useState } from 'react';

function AgeMe(): JSX.Element {
  const [age, setAge] = useState(() => 37);
  const increment = () => setAge(previousAge => previousAge + 1);
  return <button onClick={increment}>{age}</button>;
}

export default AgeMe;
