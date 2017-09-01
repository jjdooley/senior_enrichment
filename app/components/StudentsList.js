import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Table, Button } from 'react-bootstrap'

export default function StudentList(props){
    console.log('students: ', props.students, 'campusId: ', props.campusId)
    return ( 
    <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Student Id</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Email</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {
              props.students && props.students.map(student => {
                  return(
            
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>
                        <Link to={'/students/' + student.id.toString()}> 
                            {student.name}
                        </Link>
                    </td>
                    <td>{student.grade}</td>
                    <td>{student.email}</td>
                    <td><Button type="submit" value={student.id} onClick={props.handleSubmit} /></td>
                    <td>
                        <Link to={"/updatestudent/" + student.id.toString()}>Update Info</Link>
                    </td>
                </tr>
              )})
          }
        </tbody>
      </Table> 
      )
}
