import { useState, useEffect } from "react";
import Axios from "axios"

const App = () => {
    const [image, setImage] = useState("");
    useEffect(() => {
        Axios.get("https://randomfox.ca/floof/").then((res) => {
        setImage(res.data.image)
        console.log(res);
    })
    }, [])
    return(
        <>
            <img src={image}></img>
        </>
    )
}

export default App