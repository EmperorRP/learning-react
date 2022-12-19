import { useState } from "react";

export default function ConditionalComponent() {
  const [display, setDisplay] = useState(true);

  if (display) {
    return (
      <div>
        <h3>This is a Conditional Component</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Nothing to see here</h3>
      </div>
    );
  }
}
