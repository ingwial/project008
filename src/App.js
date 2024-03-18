import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    document.title = text;
  }, [text]);

  function change(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input type="text" onChange={change} />
      <p>{text}</p>
    </div>
  );
}

export default App;
