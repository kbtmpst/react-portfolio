import { useState } from "react";

function Counter() {
  const initialArray = [];
  const [array, setArray] = useState(initialArray);
  return (
    <div>
      <h1>Array: [{array}]</h1>
      <button
        onClick={() => {
          setArray((prevArray) => [...prevArray, "+1, "]);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setArray((prevArray) => [...prevArray, "-1, "]);
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          setArray(initialArray);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
