import { Badge, ListGroup } from "react-bootstrap";

const TodoItem = (props) => {
    return(
        <ListGroup.Item>
            {(props.todo.done) ? (
                <>
                    <span className='done'>{props.todo.text}</span>
                    <span className='float-end'>&#128077;</span>
                </>
            ) : (
                <>
                    {props.todo.text}
                    <Badge pill bg="success" className="float-end" onClick={() => {props.markAsDone(props.todo.id)}}>&#10003;</Badge>
                </>
            )}
            <Badge pill bg="danger" className="float-end" onClick={() => {props.deleteItem(props.todo.id)}}>X</Badge>
        </ListGroup.Item>
    )
}

export default TodoItem;