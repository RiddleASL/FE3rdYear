import { useState } from "react"

const FilterFruit = () => {
    const [filter, changeFilter] = useState("");

    const handleChange = (e) =>{
        changeFilter(e.target.value);
    }

    const initFruit = ["Apple", "Pear", "Orange", "Pineapple", "Dragon Fruit"]
    const filteredFruit = initFruit.filter((fruit) => fruit.toLowerCase().includes(filter.toLocaleLowerCase()));

    return(
        <div>
            <input type="test" onChange={handleChange} />
            <ul>
                {filteredFruit.map(fruit => {
                    return <li key={fruit}>{fruit}</li>
                })}
            </ul>
        </div>
    )
}

export default FilterFruit