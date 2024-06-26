import './App.css';
import { useState, useEffect } from 'react';


// const [firstcity, second] = ["Accra", "Tamale", "Nsawam", "Kumasi"];
// console.log(firstcity);
// console.log(second);

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondaryEmotion] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} right now`);
    }, [emotion]);

    useEffect(() => {
      console.log(`It's ${secondary}`)
    });
  return (
    <div className="App">
      <h1>Curent emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>
        Sad
        </button>
        <button onClick={() => setEmotion("Awful")}>
        awful
        </button>
        <button
        onClick={() => setEmotion("Excited")}
        >
          Excited
        </button>
        <h2>Current secondary emotion is {secondary}.</h2>
        <button onClick={()=>setSecondaryEmotion("grateful")}>Grateful</button>

    </div>
  );
}

export default App;
