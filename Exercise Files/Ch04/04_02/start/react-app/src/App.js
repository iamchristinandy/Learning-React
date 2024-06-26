import './App.css';
import { useState } from 'react';


// const [firstcity, second] = ["Accra", "Tamale", "Nsawam", "Kumasi"];
// console.log(firstcity);
// console.log(second);

function App() {
  const [emotion, setEmotion] = useState("happy");
  
  return (
    <div className="App">
      <h1>Curent emotion is {emotion}</h1>
      <button onClick={() => setEmotion("Sad")}>
        Sad
        </button>
    </div>
  );
}

export default App;
