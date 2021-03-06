import React from "react";

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    //function onclick
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);        
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText('');
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return(
        <form>
            <input
             value={inputText}
             onChange={inputTextHandler}
             type="text"
             className="todo-input">
                 
             </input>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                Підтвердити
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos"className="todos">
                    <option value="all">Всі</option>
                    <option value="completed">Виконано</option>
                    <option value="uncompleted">Невиконано</option>
                </select>
            </div>
        </form>
    );
}

export default Form;