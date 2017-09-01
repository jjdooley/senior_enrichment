import React from 'react'
import {Form, FormGroup, Col, FormControl, ControlLabel, Button} from 'react-bootstrap'

export default function NewStudentEntry(props){
    return (<div>
        <h1> New Student </h1>
        <Form horizontal>
            <FormGroup controlId="formHorizontalName">
              <Col componentClass={ControlLabel} sm={2}>
                Name
              </Col>
              <Col sm={10}>
                <FormControl type="name" placeholder="name" onChange={props.handleNameChange}/>
              </Col>
            </FormGroup>
        
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="email" onChange={props.handleEmailChange}/>
              </Col>
            </FormGroup>
        
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit" onClick={props.handleSubmit}>
                  Update
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>)
}