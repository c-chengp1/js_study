import React, { useState } from "react";

export function useCount(num) {
  const [count, setCount] = useState(num);
  function increase() {
    setCount(count + 1);
  }
  return [count, increase];
}

export const MyComponent = () => {
  const [count, increase] = useCount(0);
  return (
    <>
      <span>{count} </span>
      <button onClick={increase}> +1 </button>
    </>
  );
};
