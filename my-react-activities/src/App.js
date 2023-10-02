import data from "./data/data.json"
import PersonCard from "./components/PersonCard"

const App = () => {
    const peopleDivs = data.results.map(person => {
        return <PersonCard person={person} key={person.name.first}/>;
    })

    return(
        <>
            <h1>People</h1>
            
            <div class="row">
                {peopleDivs}
            </div>
        </>
    )
}

export default App;