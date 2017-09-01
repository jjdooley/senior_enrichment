import React, {Component} from 'react';
import {connect} from 'react-redux'
import StudentsList from '../components/StudentsList.js';
import store, {deleteStudent} from '../store.jsx'

export class AllStudentListContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit (evt) {
    evt.preventDefault();
    console.log("handlesub: ", evt.target.value)
    const studentId = evt.target.value;
    this.props.deleteStudent(studentId);
  }

  render () {

    return (

      <StudentsList
        students={this.props.students}
        handleSubmit={this.handleSubmit}
      />
    );   
  }
}

const mapDispatchToProps = dispatch => ({deleteStudent: (studentId) => dispatch(deleteStudent(studentId))})
const mapPropsToState = function(store){
  return{
    newState: store.students
  }
};

export default connect(mapPropsToState, mapDispatchToProps)(AllStudentListContainer)