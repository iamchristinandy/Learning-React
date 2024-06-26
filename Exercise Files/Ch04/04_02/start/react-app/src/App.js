import './App.css';
import { useState, useEffect } from 'react';


// const [firstcity, second] = ["Accra", "Tamale", "Nsawam", "Kumasi"];
// console.log(firstcity);
// console.log(second);

function App() {
  const [checked, setChecked] = useState(false)
    return (
      <div className="App">
          <input type="checkbox"
          value={checked}
          onChange={()=>
          setChecked((checked) => !checked)
          }
          />
          <label>{checked ? "checked": "not checked"}
          </label>
    </div>
  );
}

export default App;
