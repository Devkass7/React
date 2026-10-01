import {useState} from "react"

export default function App() {
    /**
     * Challenge: 
     * Create state to track our count value (initial value is 0)
     * Don't forget to replace the hard-coded "0" with your new state
     * 
     */
const [currentValue, setCurrentValue] = useState(0)

    function addNum(){
        setCurrentValue(currentValue + 1)
    }

    function reduceNum(){
        if(currentValue === 0){
            alert("Count cannot be less than zero")
        }else {
            setCurrentValue(currentValue - 1)
        }
        
    }

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button onClick={reduceNum} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{currentValue}</h2>
                <button onClick={addNum} className="plus" aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
