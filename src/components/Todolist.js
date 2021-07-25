import React,{useEffect,useState} from 'react';
import CreateTask from '../models/createTask'
import FilterCard from './FilterCard'
import Card from './card';
function Todolist() { 

    const [modal, setModal] = useState(false);
const[taskList,setTaskList] = useState([]);
const[todo,setTodo]= useState("");



useEffect(() => {
    let arr =localStorage.getItem("taskList")

   
    if(arr){
        let  obj =JSON.parse(arr)
        setTaskList(obj)
    }
    
    
    
},[])


const deleteTask =(index)=>{
    let tempList = taskList
    tempList.splice(index,1)
    localStorage.setItem("taskList",JSON.stringify(tempList))
    setTaskList(tempList)

    window.location.reload()

}
const updateListArray = (obj,index) =>{
    let tempList =taskList
    tempList[index] = obj
    localStorage.setItem("taskList",JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
}


    const toggle = () =>{
        setModal(!modal);
    } 
    const saveTask =(taskObj) =>{
       
      let tempList = taskList
      tempList.push(taskObj)
      localStorage.setItem("taskList",JSON.stringify(tempList))
      
      setModal(false)
      setTaskList(taskList)
     

    }
     return (
        <>
        <div className="header text-center"  >
            <h1>TASK MANAGER</h1>
        
     
        <button className="btn btn-primary" onClick={()=> setModal(true)}>create task</button> <br></br>
           <div className="serch mt-1 ">
        
     
          



         
          </div>
        </div>
<div className="container">
    <div>
        <FilterCard/>
    </div>

    

</div>
<h1> LIST OF ALL TASKS</h1>
        <div className="task-container" >
        
           
            {taskList && taskList.map((obj , index)=> <Card taskObj ={obj} index ={index} 
             deleteTask ={deleteTask} updateListArray={updateListArray} key={todo.id} />)}
            
           
           </div>
            

           
            
           <CreateTask toggle={toggle} modal ={modal} save= {saveTask} /> 
        
        
        </>
    );
};

export default Todolist
