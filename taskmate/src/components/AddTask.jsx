import React from 'react'
import './AddTask.css'

const AddTask = ({taskList,setTaskList,task,setTask}) => {
 const handleSubmit= (e)=>{
    e.preventDefault();

    if(task.id){
      const date = new Date(); // Define the date variable
      const updatedTaskList = taskList.map((todo)=>(
        todo.id === task.id ?   {id: task.id,name:task.name, time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:todo
      ));
      setTaskList(updatedTaskList);
            

          } else{
            const date = new Date(); // Define the date variable


            const newTask = {
                    id: date.getTime(),
                    name:e.target.task.value,
                    time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                  }
                  
                  setTaskList([...taskList, newTask]) ;
                  name:e.target.task.value="";
                }
              }
  const handleChange = (event) => {
    setTask();  
  };
  return (
    <section className="add-task">
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={ e =>setTask({...task,name:e.target.value})} name='task' autoComplete='off' value={task.name} placeholder='add a Task' maxLength={25}/>
            <button>Add</button>
        </form>
    </section>

  )
}

export default AddTask