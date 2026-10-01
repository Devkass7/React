import React from "react"

export default function App() {
    
    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */
    
    const [result, setResult] = React.useState("hi")
   
    function clickHandler(){
        setResult("Kassim")
    }
    
    return (
        <main>
            <h1 className="title">Is state important to know?</h1>

            <button onClick={clickHandler} className="value">{result}</button>
        </main>
    )
}
