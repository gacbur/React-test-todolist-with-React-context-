import React, { useContext } from 'react';
import { TaskListContext } from '../contexts/TaskListContext'
import Task from './Task'

const TaskList = () => {

    const { tasks } = useContext(TaskListContext)

    return (
        <ul className="task-el-cnt">
            {tasks.length ? tasks.map(task =>
                <Task task={task} />
            ) : <div className="empty-list-text">no item in the list</div>}
        </ul>
    );
}

export default TaskList;