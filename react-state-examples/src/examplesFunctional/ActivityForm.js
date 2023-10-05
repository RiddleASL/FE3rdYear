import { useState } from "react"

const ActivityForm = () => {

    const [form, setForm] = useState({});

    const handleInputChange = (e) =>{
        const name = e.target.name;
        const value = (e.target.type === "checkbox") ? e.target.checked : e.target.value;

        setForm((prevState) =>({ 
                ...prevState,
                [name]: value   
            })
        )
    }

    return(
        <>
            <form>
                <label>
                    Username: 
                    <input 
                        type="test"
                        name="username"
                        onChange={handleInputChange}
                        value={form.username}
                    />
                </label>
                <br/>
                <label>
                    Email: 
                    <input 
                        type="test"
                        name="email"
                        onChange={handleInputChange}
                        value={form.email}
                    />
                </label>
                <br/>
                <label>
                    Number of Months: 
                    <input 
                        type="number"
                        name="nom"
                        onChange={handleInputChange}
                        value={form.nom}
                    />
                </label>
                <br/>
                <label>
                    Insurance: 
                    <input 
                        type="checkbox"
                        name="checkbox"
                        onChange={handleInputChange}
                        checked={form.checkbox}
                    />
                </label>
                <br/>
            </form>

            Hi, {form.username}! You have selected a {form.nom} Month contract {form.checkbox ? "with" : "without"} insurance.
        </>
        
    )

}

export default ActivityForm