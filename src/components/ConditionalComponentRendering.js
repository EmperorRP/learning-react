import { useState } from "react";
export default function ConditionalComponentRendering() {
  const [display, setDisplay] = useState(true);
  let output;

  if (display) {
    output = <h3>This is true in component ConditionalComponentRendering</h3>;
  } else {
    output = <h3>This is false in component ConditionalComponentRendering</h3>;
  }
  
  return <div>{output}</div>;
}
