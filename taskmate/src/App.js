import { useState } from 'react';
import Header from './components/Header';
import ShowTask from './components/ShowTask';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  const[taskList,setTaskList] = useState([])
  const[task,setTask] = useState([])
  return (
    <div className="App">
     <Header />
     <AddTask taskList={taskList}setTaskList={setTaskList} setTask={setTask} task={task}/>
     <ShowTask taskList={taskList}setTaskList={setTaskList}  setTask={setTask} task={task}/>
    </div>
  );
}

export default App;
