import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const plusCount = () => {
    setCount(count + 1);
  };
 const removeCount = () => {
  if (count > 0) {
    setCount(count - 1);
  }
};

  return (
    <div className="cnt">
    <div className="count-wrapper">
      <div className="count">{count} kez tıklandı</div>
      <button className="btn plus" onClick={plusCount}>Arttır</button>
      <button className="btn backward" onClick={removeCount}>Azalt</button>
    </div>
    </div>
  );
}

export default App;
