import React from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])
    
    /**
     * Challenge:
     * Only display the <h1> below if there are unread messages
     */

    function toggle(){
        setUnreadMessages([])
    }

    return (
        <div>
            <button onClick={toggle}>Messages</button>
           {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}
        </div>
    )
}
