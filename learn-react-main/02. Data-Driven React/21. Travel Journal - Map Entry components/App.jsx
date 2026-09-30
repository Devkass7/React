import Header from "./components/Header"
import Entry from "./components/Entry"

import data from "./data"


export default function App() {

    const journalElement = data.map(el => {
       return (
        <Entry 
        img ={el.img} 
        country={el.country}
        title = {el.title}
        dates={el.dates}
        text={el.text}
        googleMapsLink = {el.googleMapsLink}
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