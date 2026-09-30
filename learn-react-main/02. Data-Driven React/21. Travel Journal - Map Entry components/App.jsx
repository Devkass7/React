import Header from "./components/Header"
import Entry from "./components/Entry"

import data from "./data"


export default function App() {

    const journalElement = data.map(el => {
       return (
        <Entry 
        key={el.id}
        {...el}
        />
       )
    })

    return (
        <>
            <Header />
            <main className="container">
             {journalElement}
            </main>
        </>
    )
}