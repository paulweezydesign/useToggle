import * as React from "react";
import "./styles.css";
import useToggle from "./hooks/useToggle";

// Usage
function App() {
  // Call the hook which returns, current value and the toggler function
  const [isTextChanged, setIsTextChanged] = useToggle();

  return (
    <button onClick={setIsTextChanged}>
      {isTextChanged ? "Toggled" : "Click to Toggle"}
    </button>
  );
}

export default App;
