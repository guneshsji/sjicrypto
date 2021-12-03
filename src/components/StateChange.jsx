import React from 'react';
import {useState, useEffect} from 'react';

const StateChange = (props) =>  {
  let [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {

      setCount(++count);
    }, 1000)

    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <div>
      <p>count : {count}</p>
      
    </div>
  );
}

export default StateChange;
