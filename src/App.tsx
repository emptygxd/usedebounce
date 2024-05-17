import { useState } from "react";
import { useDebounce } from "./shared/hooks/useDebounce";

function App() {
  const [input, setInput] = useState<string>("");
  const searchTerm = useDebounce(input, 300);

  return (
    <div>
      <h1>UseDebounce</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <p>{searchTerm}</p>
    </div>
  );
}

export default App
