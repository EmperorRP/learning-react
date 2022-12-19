import { useState } from "react";

export default function ConditionalRenderingTernary() {
  const [display, setDisplay] = useState(false);
  return display ? (
    <h3>This is true in component ConditionalRenderingTernary</h3>
  ) : (
    <h3>This is false in component ConditionalRenderingTernary</h3>
  );
}
