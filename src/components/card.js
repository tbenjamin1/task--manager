import React , {useState} from 'react'
import EditTask from '../models/EditTask'

export default function Card ({taskObj,index ,deleteTask,updateListArray}) {
   const [modal,setModel] = useState(false);

const colors =[
 {
    primaryColor:"#964F7",
    secondaryColor:"#F3FOFD" 
 },
 {
    primaryColor:"#sd93e1",
    secondaryColor:"#ECF3FC" 
 },
 {
    primaryColor:"#F9D288",
    secondaryColor:"FEFAF1" 
 },
 {
    primaryColor:"#5DC250",
    secondaryColor:"#F2FAF1" 
 },
 {
    primaryColor:"F48687",
    secondaryColor:"FDF1F1" 
 }
]
 const toggle = ()=>{

   setModel(!modal);
 }

 const updateTask = (obj) =>{
 updateListArray(obj,index)

 }

 
 const handleDelete =()=>{

   deleteTask(index)

}

 

    return (
        <div class ="card-wrpper mr-5">
            <div class="card-top" style={{"background-color":colors[index%5].primaryColor}}></div>
            <div class="task-holder">
                 <span class="card-header" style={{"background-color":colors[index%5].secondaryColor,"border-radius":"10px"}}>{taskObj.Name}</span>
              <p className="Description">{taskObj.Description}
               
              </p>
              

            <div style={{"position":"absolute","right":"20px", "bottom":"20px"}}>
                <li class="far fa-edit m-3" style={{"color":colors[index%5].primaryColor,"cursor":"pointer"}} onClick={() => setModel(true)} ></li>
                <li class=" btn btn-danger far fa-trash-alt m-3" style={{"cursor":"pointer"}} onClick={handleDelete}  ></li>
                
                <li class=" btn btn-success far fa-check-circle" type="checkbox" style={{"cursor":"pointer"}}   m ></li>
              

            </div>

            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );
};
