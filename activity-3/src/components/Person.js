import data from "../data.json"

const final = [];

const Person = () => {
    data.results.forEach(person => {
        final.push(
            <li>{person.picture.medium}</li>,
            <li>{person.name.first}</li>,
            <li>{person.quote}</li>
        )
    })
    return(
        final
    )
}

export default Person