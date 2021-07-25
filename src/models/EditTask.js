import React ,{useState,useEffect}from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default function EditTask({modal,toggle,updateTask,taskObj}) {

  const[taskName,setTaskName] =useState('');
  const[description,setDescription] =useState('');
  const[priority,setPriority] =useState('');


  const handleChange =(e) =>{

 const{ name,value} = e.target
 
    if(name === "taskName"){
      setTaskName(value)
    }else if(name=== "priority"){
      setPriority(value)
    }else{
      setDescription(value)
    }
  }
  useEffect(() => {
  setTaskName(taskObj.Name)
  setDescription(taskObj.Description)
   
    
  } ,[])
  const handleUpdate = (e) =>{
    e.preventDefault();
    let tempObj = {}
    tempObj['Name'] = taskName
    taskObj["priority"] = priority
    tempObj['Description'] =description

    
    updateTask(tempObj)
  }

    return (
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>updateTask</ModalHeader>
        <ModalBody>
          <form>
 
      <div className="form-groug">
        <label className="form-label">TaskName</label>
        <input type="text"className="form-control" value={taskName} onChange ={handleChange} name ="taskName" />
         
      </div>
      <div className="form-groug">
        <hr></hr>
        <select value={priority} onChange ={handleChange} name ="taskPriority">
        <option >select priority</option>
      <option value="high">high</option>
      <option value="low">low</option>
      </select>
      </div>
      <hr></hr>
      <div className="form-groug">
      <label className="form-label">Description</label>
        <textarea rows="5" className="form-control" value={description} onChange ={handleChange} name ="description"></textarea>

      </div>

          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
}
