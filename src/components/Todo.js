import React from 'react';
import Chrestyk2 from '../chrestyk2.svg'

const Todo = ({text, todo, todos, setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));        
    };
    const completeHandler = () => {
        setTodos(todos.map(element => {
            if(element.id == todo.id){
                return {
                    ...element, completed: !element.completed
                }
            }
             return element;          
            
        }));
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}` }>{text}</li>
           <div className="todo-controls">
                <button onClick={completeHandler} className="check_btn">Виконано</button>
                <a onClick={deleteHandler} className="trash_btn"><img src={Chrestyk2} width= "50" height="50"></img></a>
           </div>
            
        </div>
    );
}

export default Todo;