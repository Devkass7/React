import React from "react"

export default function Pad(props) {
    /**
     * Challenge part 3:
     * Our buttons got turned off by default! Update the code
     * so if the button is "on", it has the className of "on".
     */

    const [isOn, setIsOn] = React.useState(props.on)

    function onHandler(){
        setIsOn(prev => !prev)
    }
    
    return (
        <button className= {isOn ? "on" :""}
            style={{backgroundColor: props.color}} onClick= {onHandler}
        ></button>
    )
}