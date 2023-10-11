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
        const newList = [];
        const tempList = list.map(item => {
            if(item.id !== id){
                newList.push(item);
            }
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
        if(textInput != ""){
            let newTodo = {
                id: list[list.length-1].id + 1,
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