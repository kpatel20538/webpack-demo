import * as React from "react";

export function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h1>
        Counter: <span id="display">{count}</span>
      </h1>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}
