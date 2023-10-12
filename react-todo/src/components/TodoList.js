import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

import Card from "react-bootstrap/Card"
import { Button, ListGroup } from "react-bootstrap";

const TodoList = () =>{

    let initList = [
        {id: 1, text: 'Clean', done: true},
        {id: 2, text: 'Dance', done: false},
        {id: 3, text: 'Die', done: false},
    ]

    let localList = JSON.parse(localStorage.getItem("todos"));
    if(localList){
        initList = localList;
    }

    const [list, setList] = useState(initList)
    const [textInput, setTextInput] = useState("")

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(list));
    }, [list])
    
    const markAsDone = (id) => {
        const newList = list.map(item => {
            if(item.id === id){
                item.done = true;
            }

            return item;
        })
        setList(newList)
    }

    const deleteItem = (id) => {
        const newList = list.filter(item => {
            return item.id != id;
        })
        console.log(newList);
        setList(newList)
    }

    let todoItems = list.map((item, i) => {
        return <TodoItem key={i} markAsDone={markAsDone} deleteItem={deleteItem} todo={item}/>
    })
    
    const handleTextInput = e => {
        setTextInput(e.target.value)
    }

    const addTodoItem = e => {
        let newID = (list.length != 0)? list[list.length-1].id + 1 : 0
        console.log(newID);
        if(textInput != ""){
            let newTodo = {
                id: newID,
                text: textInput,
                done: false
            }

            setList((prevList) => [...prevList, newTodo]);
            setTextInput("")
        }
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
                <input type="text" onChange={handleTextInput} value={textInput}/>
                <Button className="float-end" onClick={addTodoItem}>Add</Button>
            </Card.Footer>
        </Card>
    )
}

export default TodoList;