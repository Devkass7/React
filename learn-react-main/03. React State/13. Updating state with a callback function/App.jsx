import { useState } from "react"



export default function App() {
 
const [count, setCurrent] = useState(0);

function addNum(preCount){
    setCurrent(preCount => count + 1)
}

function deduct(preCount){
    if(count === 0){
        alert("Count cannot be less than 0.")
    } else {
        setCurrent( preCount => count - 1)
    }

}
    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={deduct} className="minus"  aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onClick={addNum} className="plus"  aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
