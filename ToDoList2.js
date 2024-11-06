import React,{useState, useEffect} from "react";
import "./Contenedor.css"; 

//Componente que muestra lista de tareas

function TaskList ({tasks,removeTask}){

        return(
            
            <ul className="points">
                {tasks.map((task,index)=>(
                    <li key={index}>{task.charAt(0).toUpperCase() + task.slice(1).toLowerCase()} <button onClick={()=> removeTask(index)}>Quitar</button></li>
                    
                ))}
                
            </ul>
        )}
    


//checking
//Armado del componente principal
function TodoApp2(){

    const [tasks, setTasks] =  useState(()=>{
        const tasksSaved = localStorage.getItem('tasks');
        return tasksSaved ? JSON.parse(tasksSaved): [];
    });
    const [task, setTask] = useState('');

    
    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])
    

    const addTask = () =>{
        setTasks([...tasks,task]);
        setTask('');
    };

    const removeTask = (index)=>{
        setTasks(tasks.filter((_,i)=> i !== index));
    };


    return (
        <div className="contenedor">
            <h2>To do list</h2>
            <hr></hr>
            <hr></hr>

            <div className="lista">
                <input
                    type="text" 
                    value={task}
                    onChange={(e)=>setTask(e.target.value)}
                    />
                    <button onClick={addTask}>Añadir Tarea</button>
                    <TaskList tasks={tasks} removeTask={removeTask}/>
                    
            </div>
            
        </div>
    );

 
}

export default TodoApp2;