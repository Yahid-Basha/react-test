import { useState } from "react"
function App(props) {

  const [a ,setA] = useState(0)
  console.log(a)
  // setA(1)

  return (
   <div className="a">
      <h1> {props.a}</h1>
      <button onClick={ ()=>{setA(a+1)} }> Update by 1</button>
      <h1> {a}</h1>
   </div>
  )
}

export default App
