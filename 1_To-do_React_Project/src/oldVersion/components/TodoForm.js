import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid,v4() })
        }

    }


    return (
        <form>
            <input
              name="task"
              type="text"
              value={todo.task} 
              onChange={handleTaskInputChange} />
            <button />
        </form>
    )

}

export default TodoForm;