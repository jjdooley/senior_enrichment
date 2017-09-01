import React from 'react'
import store from '../store.jsx'
import { connect } from 'react-redux'

function SingleStudent(props){
    console.log('props:', props.students)
    const search = function(x){return x.id === Number(props.match.params.id)}
    const selectedStudent = props.students.find(search)
    console.log(selectedStudent)
    return(
        <div>
            <h1> {selectedStudent.name} </h1>
            <p> {selectedStudent.grade} </p>
            <p> {selectedStudent.email} </p>
        </div>
    )
}

const mapStateToProps = function(state){
    return {students: state.students};
 }
 
 // console.log(this.props)
 
export default connect(mapStateToProps)(SingleStudent);
 
 
 


export {SingleStudent}
