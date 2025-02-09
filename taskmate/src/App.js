import { useState ,useEffect} from 'react';
import Header from './components/Header';
import ShowTask from './components/ShowTask';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  const[taskList,setTaskList] = useState(JSON.parse(localStorage.getItem("taskList"))||[])
  const[task,setTask] = useState([])

  useEffect(()=>{
    localStorage.setItem("taskList", JSON.stringify(taskList));

  },[taskList])

  return (
    <div className="App">
     <Header />
     <AddTask taskList={taskList}setTaskList={setTaskList} setTask={setTask} task={task}/>
     <ShowTask taskList={taskList}setTaskList={setTaskList}  setTask={setTask} task={task}/>
    </div>
  );
}

export default App;
