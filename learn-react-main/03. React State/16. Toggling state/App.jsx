import {useState} from "react"

export default function App() {
  

const [isGoingOut, setIsGoingOut] = useState(true)

  let answer = isGoingOut ? "Yes" : "No"

  
function clickHandler(){
  setIsGoingOut((prev) =>{
    return !prev
  })
}

  
 
  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button onClick ={clickHandler}  className="value">{answer}</button>
    </main>
  );
}
