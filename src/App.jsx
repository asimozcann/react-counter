import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 10) setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="cnt">
      <div className="count-wrapper">
        <div className="count">{count} kez tıklandı</div>
        <button 
          className="btn plus" 
          onClick={incrementCount} 
          disabled={count >= 10}
        >
          Arttır
        </button>
        <button 
          className="btn backward" 
          onClick={decrementCount} 
          disabled={count <= 0}
        >
          Azalt
        </button>
        <button 
          className="btn reset" 
          onClick={resetCount}
        >
          Sıfırla
        </button>
      </div>
    </div>
  );
}

export default App;
