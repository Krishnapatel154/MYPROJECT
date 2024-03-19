import './App.css';
import {usestate} from 'react'
function App() {

  const [value,setvalue]=usestate('goodmorning')
  function msg()
  {
    setvalue('evryone')
  }
  return(
    <div className='App'>
      <h1>hello {value}</h1>
      <button onClick={msg}>click me</button>
    </div>
  )
}
export default App;
