import React, {Component} from 'react';
import {connect} from 'react-redux'
import StudentsList from '../components/StudentsList.js';
import store, {deleteStudent} from '../store.jsx'
import AllCampuses from '../components/AllCampuses'

export class AllCampusesListContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (evt) {
    evt.preventDefault();
    console.log(evt.target.value)
    const studentId = evt.target.value;
    this.props.deleteCampus(studentId);
  }

  render () {

    return (

     <AllCampuses/>
    );   
  }
}

const mapDispatchToProps = dispatch => ({
    deleteStudent: (studentId) => dispatch(deleteStudent(studentId)), 
    updateStudent: (studentId) => dispatch(updateStudent(studentId))
})
const mapPropsToState = function(store){
  return{
    newState: store.students
  }
};

export default connect(mapPropsToState, mapDispatchToProps)(AllStudentListContainer)