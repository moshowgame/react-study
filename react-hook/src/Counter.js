import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const countUpdate = async () => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
      console.log(`You clicked ${count} times`)
    }
    //need to call it
    countUpdate();
    //call it in 4s later
    const intervalId = setInterval(countUpdate, 4000);
    return () => clearInterval(intervalId);
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter