import { useState } from "react";

function FunctionalComponent() {
  const [counter, setCounter] = useState(0);
  const [varname, setName] = useState("Rahul");

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Hi I am {varname}</h1>
      <div>Counter value: {counter}</div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default FunctionalComponent;
