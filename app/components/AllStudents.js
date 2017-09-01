import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import store from '../store.jsx'
import {Button} from 'react-bootstrap'
import AllStudentListContainer from '../containers/AllStudentListContainer.js'

function AllStudents(props){
        return(
            <div className="col-xs-10">
                <h3>Students</h3>
                <Button bsStyle="primary">
                    <Link to="/newstudent">
                        Add new student
                    </Link>
                </Button>
                <AllStudentListContainer students={props.students} />
            </div>)
}

// const mapStateToProps = function(){
    
// }
const mapStateToProps = function(state){
    return {students: state.students};
 }
 
 // console.log(this.props)
 
export default connect(mapStateToProps)(AllStudents);
 
 
 


export {AllStudents}