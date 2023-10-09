import { useState } from "react";
import TodoItem from "./TodoItem";

import Card from "react-bootstrap/Card"
import { Button, ListGroup } from "react-bootstrap";

const TodoList = () =>{

    let initList = [
        {id: 1, text: 'Clean', done: true},
        {id: 2, text: 'Dance', done: false},
        {id: 3, text: 'Die', done: false},
    ]

    const [list, setList] = useState(initList)
    const [textInput, setTextInput] = useState("")

    let todoItems = list.map((item, i) => {
        return <TodoItem key={i} todo={item}/>
    })
    
    const handleTextInput = e => {
        setTextInput(e.target.value)
    }

    const addTodoItem = e => {
        let newTodo = {
            id: list[list.lenght -1].id + 1,
            text: textInput,
            done: false
        }

        setList((prevList) => [...prevList, newTodo]);
        setTextInput("")
    }

    return(
        <Card>
            <Card.Body>
                <Card.Header>To-do List</Card.Header>
                <ListGroup variant="flush">
                    {todoItems}
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <input type="text" onChange={handleTextInput} value={textInput}></input>
                <Button className="float-end">Add</Button>
            </Card.Footer>
        </Card>
    )
}

export default TodoList;