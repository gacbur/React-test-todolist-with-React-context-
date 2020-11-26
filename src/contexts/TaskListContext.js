import React, { createContext, useState, useEffect } from 'react';

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {

    const tasksInitialState = JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks, setTasks] = useState(tasksInitialState)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const AddTask = (task) => {
        const newTasks = [{ text: task, id: tasks.length + 1 }, ...tasks]
        setTasks(newTasks)
    }

    const DelTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id)
        setTasks(newTasks)
    }

    const ClearTask = () => {
        setTasks([])
    }


    return (
        <TaskListContext.Provider value=
            {{
                tasks,
                AddTask,
                DelTask,
                ClearTask
            }}>
            {props.children}
        </TaskListContext.Provider>
    );
}


export default TaskListContextProvider;