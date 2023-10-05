import { useState } from "react";

const MultipleForm = () => {

    const [form, setForm] = useState({});

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = (e.target.type === "checkbox") ? e.target.checked : e.target.value ;

        console.log(`Input name: ${name} \n Input Value: ${value}`)

        setForm((prevState) => ({
                ...prevState,
                [name]: value
        }))
    }

    return(
        <form>
            <label>
                Email:
                <input 
                    type="text" 
                    name="email" 
                    onChange={handleInputChange}
                    value = {form.email}
                />
            </label>
            <br/>
            <label>
                Password:
                <input 
                    type="text" 
                    name="password" 
                    onChange={handleInputChange}
                    value = {form.password}
                />
            </label>
            <br/>
            <label>
                I wish to recieve the weekly newsletter
                <input 
                    type="checkbox"
                    name="checkbox"
                    onChange={handleInputChange}
                    checked={form.checkbox}
                />
            </label>
        </form>
    );
};

export default MultipleForm;