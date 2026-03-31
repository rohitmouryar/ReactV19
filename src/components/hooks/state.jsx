import { useState } from "react";
export const State = () => {
  // React is dosn't support the normal value
  //   let value = 0;
  //   const handleButtonClick = () => {
  //     value++;
  //     console.log(value);
  //   };
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(count + 1); // update the value of state value
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>Increase </button>
    </>
  );
};
