import React, {Component} from 'react';
import {connect} from 'react-redux'
import StudentsList from '../components/StudentsList.js';
import store, {deleteStudent} from '../store.jsx'

export class AllCampusesListContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleUpdateSubmit (evt) {
    evt.preventDefault();
    console.log(evt.target.value)
    const studentId = evt.target.value;
    this.props.updateCampus(studentId);
  }

  handleDeleteSubmit (evt) {
    evt.preventDefault();
    console.log(evt.target.value)
    const studentId = evt.target.value;
    this.props.deleteCampus(studentId);
  }

  render () {

    return (

      <StudentsList
        campus={this.props.campus}
        handleSubmit={this.handleSubmit}
      />
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