import React from 'react'

const TodosList = ({todos, deleteTodo, editTodo}) => {

    const completeTodo = e => {
        if (e.target.parentNode.parentNode.style.textDecoration !== "line-through") {
            e.target.parentNode.parentNode.style.textDecoration = "line-through";
            e.target.parentNode.parentNode.style.backgroundColor = "#77ff77"
        } else {
            e.target.parentNode.parentNode.style.textDecoration = '';
            e.target.parentNode.parentNode.style.backgroundColor = ''
        }
    }

    const handleEdit = e => {
        editTodo(e)
    }

    const handleDelete = e => {
        deleteTodo(e)
    }

    const listItems = todos.map((todo, index) => {
        return <li key={index} className="todos-items">
                <p className="todos-content">
                    {todo}
                </p>
                    <div className="todo-actions-group">
                        <button className="complete-todo todo-actions" onClick={completeTodo}>&#10003;</button>
                        <button className="edit-todo todo-actions" onClick={handleEdit}>&#9998;</button>
                        <button className="delete-todo todo-actions" onClick={handleDelete}>&#10005;</button>
                    </div>
            </li>
    })

    return (
        <ul className="todos-list">
           {listItems} 
        </ul>
    )
}

export default TodosList 
