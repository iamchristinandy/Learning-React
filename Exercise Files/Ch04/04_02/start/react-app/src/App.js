import './App.css';

const [firstcity, second] = ["Accra", "Tamale", "Nsawam", "Kumasi"];
console.log(firstcity);
console.log(second);

function App({library}) {
  return (
    <div className="App">
      <h1>Hello from {library}</h1>
    </div>
  );
}

export default App;
