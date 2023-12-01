/* eslint-disable react/jsx-key */
import{useEffect, useState} from  'react'
import "./App.css";

/*=========EXEMPLO 01 =============
function App() {
  const [count, setCount] = useState(0);
  const [countB, setCountB] = useState(0);
  const [data, setData] = useState('');

  //Vai executar sempre
  useEffect(() =>{
    console.log('executar sempre');
  })

  //Executar ao iniciar
  useEffect(() =>{
    console.log('Executar ao iniciar');
  },  []);

  //Executar sempre que um estado específico é alterado
  useEffect(()=>{
    console.log('Executar sempre que um estado específico é alterado')
  }, [countB])

//função Clean up
  useEffect(() =>{
    const timer = setTimeout(()=>{
    console.log(`O count foi executado ${count}`)
  }, 1000)

  return()=>{
    clearTimeout(timer)
  }
}, [count])



//Caso real - Request API
useEffect(() =>{
  fetch('https://api.github.com/users/LucieneFreitas')
.then(res => res.json())
.then((data) => setData(data))
}, [])

console.log(data)


  return (
    <div className="App">
      <h1>React</h1>

      <div className="card">
      <h3>Name: {data.name}</h3>
        <p>Renderizado {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Render</button>
      </div>

      <div className="card">
        <p>Renderizado {countB}</p>
        <button onClick={() => setCountB((count) => count + 1)}>Render B</button>
      </div>

    </div>
  );
}

*/



/*===========EXEMPLO 2 =================*/
interface DemoProps {}

export default function Demo({}: DemoProps){
  const [count, setCount] = useState(0);

  return(
    <div className='tutorial'>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count  -1)}>Decrement</button>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
    </div>
  )
}


