import React, {useState} from 'react'

const AddTodosForm = (props) => {

    const [todo, setTodo] = useState(['']);

    const handleChange = e => {
        setTodo([e.target.value]);
    }

    const handleSubmit = e => {
        if (todo[0] !== '') {
            props.handleSubmit(todo[0]);
            setTodo(['']);
        }
        e.preventDefault();
    }

    return (
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="add new to-do" 
                onChange={handleChange} value={todo[0]} className="todos-input"/>
                <button type='submit' className="todos-submit">Add</button>
            </form>
    )
}

export default AddTodosForm