import React, {useState} from 'react'
import TodosList from '../TodosList'
import AddTodosForm from '../AddTodosForm'
import Header from '../Header';
import SubHeader from '../SubHeader';

const Todos = () => {
    const [todos, setTodos] = useLocalStorage('todos', []);

    const addTodo = (content) => {
        setTodos([...todos, content])
    }

    const deleteTodo = (e) => { 
        const todoForDelete = e.target.parentNode.parentNode;
        const todoContent = todoForDelete.firstChild.innerHTML;
        const filteredState = todos.filter(todo => {
            return todo !== todoContent
        })
        setTodos(filteredState);
    }

    const editTodo = e => {
        const todoContent = e.target.parentNode.previousElementSibling;
        const indexOfTodo = todos.indexOf(todoContent.innerHTML)
        const removeOldValue = todos.filter(todo => {
            return todo !== todoContent.innerHTML
        }) 
        if (todoContent.getAttribute('contentEditable') !== 'true') {
            todoContent.setAttribute('contentEditable', 'true');
            todoContent.focus();
            todoContent.style.backgroundColor = 'orange'
            e.target.innerHTML = '&#9997;';
            console.log(indexOfTodo)
        } else {
            todoContent.setAttribute('contentEditable', 'false');
            console.log(indexOfTodo)
            removeOldValue.splice(indexOfTodo, 0, todoContent.innerHTML)
            console.log(removeOldValue)
            todoContent.style.backgroundColor = '';
            e.target.innerHTML = '&#9998;';
            const addNewValue = todos.add
            // const addNewValue = todos.filter(todo => {
            //     console.log(todo)
            //     return todo === todoContent.innerHTML
            // })
            // console.log(addNewValue)
        }
    }

    return (
        <div className="todos-page">
            <Header headerText='To-dos Manager'/>
            <SubHeader subHeaderText='Here you can easily set goals so you can focus on achieving them!'/>
            <AddTodosForm handleSubmit={addTodo} />
            <TodosList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
    )
}

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });
const setValue = value => {
    try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
        console.log(error);
    }
}
return [storedValue, setValue]
}

export default Todos