import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'








function app(){




  
const[tasks, setTasks] = useState([""]);
const[newTask, setnewTask] = useState("");
function handleInputChange(event){
setnewTask(event.target.value);
}

function addTask(){

    if(newTask.trim()  !== ""){
    setTasks(t =>[...t, newTask ]);
    setnewTask("");
}}

function deleteTask(index){

    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks)

}

function moveTaskUp(index){
    if (index >0) {
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index -1], updatedTasks[index]];
        setTasks(updatedTasks);
        
    }

}
function moveTaskDown(index){
    if (index < tasks.length -1) {
        const updatedTasks = [...tasks];
        [ updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index +1], updatedTasks[index]];
        setTasks(updatedTasks);
        
    }


}


    return(
        

          <>
        <div className="todoList">
            <h1>To-Do-List</h1>
            </div>;
             <div  className='Input-task'>
                 <input 
                type="text" 
                placeholder='Enter A Task....'
                value={newTask}
                onChange={handleInputChange}></input>
                
                <button  className='Addbtn'
                onClick={addTask}>addTask
                    
                </button>
            </div>
              <ol>
                {tasks.map((task, index)=>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-btn'
                    onClick={()=>deleteTask(index)}>Delete</button>

                    <button className='move-btn'
                    onClick={()=>moveTaskUp(index)}>Up</button>

                    <button className='move-btn'
                    onClick={()=>moveTaskDown(index)}>Down</button>
                  </li>)} 
            </ol>  
                 
      </>);  
}        
export default app
        
  

     



