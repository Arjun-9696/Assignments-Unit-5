import React from 'react';
import { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const substract = () => {
    setCount(count - 1);
  };
  const double = () => {
    setCount(count * 2);
  };
  return (
    <>
      <h1 style={count % 2 === 0 ? { color: 'green' } : { color: 'red' }}>
        Counter:{count}
      </h1>

      <button onClick={add}>Increment</button>
      <button onClick={substract}>Decrement</button>
      <button onClick={double}>Double</button>
    </>
  );
};

export default Counter;
