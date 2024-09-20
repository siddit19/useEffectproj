
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log(`The value of count is ${count}`)
  },[count])

  return (
    <>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>
      <p>The value of count is {count}</p>

    </>
  )
}

export default App
