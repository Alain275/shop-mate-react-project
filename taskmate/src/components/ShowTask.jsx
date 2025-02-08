import React from 'react'
import './Showtask.css'
const ShowTask = ({taskList,setTaskList,task,setTask}) => {

    const handleDelete = (id) =>{
        const updatedTaskList = taskList.filter(task =>task.id !==id);
        setTaskList(updatedTaskList);

    }

    const handleEdit = (id) =>{ 
        const selectedTask = taskList.find(task =>task.id===id); 
    //    console.log(selectedTask)
            setTask(selectedTask);

    }
  return (
   <section className="show-task">
    <div className='head'>
        <div>
            <span className="title">Todo</span>
            <span className="count">{taskList.length}</span>
        </div>
        <button className="clear" onClick={() => setTaskList([])}>Clear All</button>

     </div>
        <ul>
            {taskList.map((task)=>{
                return(
                
            <li key={task.id}>
                <div className='task-info'>
                    <p className='name'>{task.name}</p>
                    <p className='time'>{task.time}</p>
                </div>
                <div className='icons'>
                    <i onClick={() =>handleEdit(task.id)} className="bi bi-pencil-square edit"></i>
                    <i onClick={() => handleDelete(task.id)} className="bi bi-trash3 delete"></i>

                </div>
            </li>
        )})}
           
        </ul>
   </section>
  )
}

export default ShowTask