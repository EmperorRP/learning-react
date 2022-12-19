import { Component } from "react";

function FunctionEvent() {
  function handleClick() {
    console.log("function based event handling");
  }
  return (
    <div>
      Functional Component
      <button onClick={handleClick}>Click here</button>
      {/*dont make parentheses after handleClick() else it will trigger the function even if button not clicked*/}
    </div>
  );
}

export default FunctionEvent;
