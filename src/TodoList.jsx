import React, { useState } from 'react';
import './todolist.css';




const TodoList = () => {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([])

 
    const handleChange = (e) => {
        e.preventDefault();
      setTasks([...tasks, newTask])
    }

    const deleteTask = (index) => {
        let duplicateArray = [...tasks]
        duplicateArray.splice(index, 1)
        setTasks(duplicateArray)
    }

    const taskList = tasks.map((object, index) =>{ 
        return <div className="app__todo-task" key={index.id}>
            <h1>{index +1} {object} </h1>
            <button className="app__todo-btn_task" onClick={() => {(deleteTask(index))}}>DELETE</button>
        </div>
        
    })
    return (
        <div className="app__todo">
        <h1>My To Do List</h1>
            <div className="app__form-container">
            <form onSubmit={handleChange}>
                <input type="text" placeholder="task" value={newTask} onChange={(e) => {setNewTask(e.target.value)}}  />
                <button className="app__todo-btn" type="submit">ADD TASK</button>
            </form>

            </div>
            {taskList}
        </div>
    );
}

export default TodoList;
