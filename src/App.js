import './App.css';
import TaskList from './components/TaskList'
import TaskListContextProvider from './contexts/TaskListContext'
import AddTask from './components/AddTask'


const App = () => {
  return (
    <TaskListContextProvider>
      <div className="tasklist-cnt">
        <AddTask />
        <TaskList />
      </div>
    </TaskListContextProvider>
  );
}

export default App;
