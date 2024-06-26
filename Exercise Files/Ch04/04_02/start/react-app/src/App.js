import './App.css';
import { useState, useEffect } from 'react';


// const [firstcity, second] = ["Accra", "Tamale", "Nsawam", "Kumasi"];
// console.log(firstcity);
// console.log(second);

function App() {
  const [emotion, setEmotion] = useState("happy");
  useEffect(() => {
    console.log(`It's ${emotion} right now`);
    }, [emotion]);
  return (
    <div className="App">
      <h1>Curent emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>
        Sad
        </button>
        <button onClick={() => setEmotion("Awful")}>
        awful
        </button>
    </div>
  );
}

export default App;
