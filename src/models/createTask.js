import React ,{useState}from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,input} from 'reactstrap';
export default function CreateTask({modal,toggle,save}) {

  const[taskName,setTaskName] =useState('');
  const[description,setDescription] =useState('');

  const handleChange =(e) =>{

 const name= e.target.name
 const value= e.target.value
    if(name === "taskName"){
      setTaskName(value)
   }else{
      setDescription(value)
    }
  }
  const handleSave = (e) =>{
    e.preventDefault();
    

    let taskObj= {}
    taskObj["Name"] = taskName

    taskObj["Description"] = description

    save(taskObj)
  }

    return (
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>createTask</ModalHeader>
        <ModalBody>
          <form>
 
      <div className="form-groug">
        <label className="form-label">TaskName</label> 
        <input type="text"className="form-control" value={taskName} onChange ={handleChange} name ="taskName" />
         
      </div>
      
      <hr></hr>
      <div className="form-groug">
      <label className="form-label">Description</label>
        <textarea rows="5" className="form-control" value={description} onChange ={handleChange} name ="description"></textarea>

      </div>

          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>AddTask</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
}
