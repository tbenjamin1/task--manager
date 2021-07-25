import React from 'react'
import {  Button,  Row, Col, Badge } from 'reactstrap';
export default function FilterCard() {

       const arr = JSON.parse(localStorage.getItem('taskList'));

    return (
        <div className="filter-container" >

        <Row >
          <Col sm="2">
            <div class ="card-wrpper md-5">
            
            
                 <span class="card-header" > TOTAL TASKS</span>
                 <Button color="primary" className="badge">
        Notifications <Badge color="secondary">{arr.length}</Badge>
      </Button>
            
             </div>
          </Col>
        

      

          
          

    </Row>
            
        </div>
    )
}
