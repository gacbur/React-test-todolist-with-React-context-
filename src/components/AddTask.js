import React, { useContext, useState } from 'react';
import { TaskListContext } from '../contexts/TaskListContext'

const AddTask = () => {

    const { AddTask, ClearTask } = useContext(TaskListContext)

    const [newTask, setNewTask] = useState('')

    const handleAddTask = (e) => {
        e.preventDefault()
        if (newTask !== '') {
            AddTask(newTask)
            setNewTask('')
        }
    }

    return (
        <div className="AddTask">
            <form className="add-el-cnt" onSubmit={handleAddTask}>
                <input
                    type="text"
                    placeholder="Add task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                ></input>
                <button type="submit">add</button>
            </form>
            <div className="deleteSection">
                <button onClick={ClearTask}>Delete all</button>
            </div>
        </div>
    );
}

export default AddTask;