import './App.css';
import { useRef } from 'react';


// const [firstcity, second] = ["Accra", "Tamale", "Nsawam", "Kumasi"];
// console.log(firstcity);
// console.log(second);

function App() {
            const txtTitle = useRef();
            const hexColor = useRef();
            const submit = e => {
              e.preventDefault();
              const title = txtTitle.current.value;
              const color = hexColor.current.value;
              alert(`${title}, ${color}`);
              txtTitle.current.value = "";
              hexColor.current.value = "";
            }
        return (
            <form onSubmit={submit}>
                <input
                ref={txtTitle}
                type='text'
                placeholder='colour title...'/>
                <input ref={hexColor}
                type="color"/>
                <button>Add</button>
            </form>
        )
  // const [checked, setChecked] = useReducer (checked => !setChecked, false);
  //   return (
  //     <div className="App">
  //         <input type="checkbox"
  //         value={checked}
  //         onChange={(setChecked)=>
  //         setChecked((checked) => !checked)
  //         }
  //         />
  //         <label>{checked ? "checked": "not checked"}
  //         </label>
  //  </div>
  
};

export default App;
