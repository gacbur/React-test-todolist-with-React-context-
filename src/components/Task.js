import React, { useContext } from 'react';
import { TaskListContext } from '../contexts/TaskListContext'

const Task = ({ task }) => {

    const { DelTask } = useContext(TaskListContext)

    const handleDeleteTask = (taskId) => {
        DelTask(taskId)
    }

    return (
        <>
            <li className="task-el">
                <div className="task-el-text">{task.text}</div>
                <button
                    className="task-el-delete"
                    onClick={() => handleDeleteTask(task.id)}
                >x</button>
            </li>

        </>
    );
}

export default Task;