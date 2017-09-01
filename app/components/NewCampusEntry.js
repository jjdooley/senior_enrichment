import React from 'react'
import {Form, FormGroup, Col, FormControl, ControlLabel, Button} from 'react-bootstrap'

export default function NewCampusEntry(props){
    console.log('NCE Props: ', props)
    return (
    <div>
    <h1> New Campus </h1>
    <Form horizontal>
        <FormGroup controlId="formHorizontalName">
          <Col componentClass={ControlLabel} sm={2}>
            Name
          </Col>
          <Col sm={10}>
            <FormControl type="name" placeholder="name" onChange={props.handleNameChange}/>
          </Col>
        </FormGroup>
    
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Location
          </Col>
          <Col sm={10}>
            <FormControl type="location" placeholder="location" onChange={props.handleLocationChange} />
          </Col>
        </FormGroup>
    
        <FormGroup>
          <Col smOffset={2} sm={10}>
            <button onClick={props.handleSubmit} name="submit"></button>
          </Col>
        </FormGroup>
      </Form>
    </div>)
}