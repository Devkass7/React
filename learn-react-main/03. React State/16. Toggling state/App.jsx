import { useState } from "react";

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the button flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
   
    const[isGoingOut, setIsGoingOut] = useState(true)

    let answer = isGoingOut ? "Yes" : "No"

    function clickHandler(){
        setIsGoingOut((prev) => {
            return !prev
        })
    }
   








    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button onClick={clickHandler} className="value">{answer}</button>
        </main>
    )
}
