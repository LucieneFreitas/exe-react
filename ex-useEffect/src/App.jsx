/* eslint-disable react/jsx-key */
import{useEffect, useState} from  'react'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  //Vai renderizar sempre
  useEffect(() =>{
    console.log('renderizar sempre');
  })

  //Vai renderizar 1x
  useEffect(() =>{
    console.log('renderizar 1x')
  },  []);

  return (
    <div className="App">
      <h1>React</h1>

      <div className="card">
        <p>foi feito {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Render</button>
      </div>

    </div>
  );
}

export default App;
