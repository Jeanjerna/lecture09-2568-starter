import { useState } from "react";

export default function CounterPage() {
  const [counter , setcounter]  = useState(0);
  const addCounter = () => {
    setcounter(counter + 1);
  };

  

  return (
      <div className="container text-center">
        {/* Result Text */}
        <h2>Counter Page</h2>
        <p>Counter: {counter}</p>
        <button onClick={addCounter}>Increase</button>
        {/* <button onClick={() => setcounter(counter + 1)}>Increase</button> */}
      </div>
  );
}
