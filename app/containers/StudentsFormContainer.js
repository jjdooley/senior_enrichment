import React, {Component} from 'react';
import NewStudentEntry from '../components/NewStudentEntry';
import { connect } from 'react-redux'
import store, {postNewStudent} from '../store.jsx'

export class StudentsFormContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
        name: '',
        grade: 100,
        email: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange (evt){
    const value = evt.target.value;
    this.setState({
      name: value
      });
  }

  handleEmailChange (evt) {
    const value = evt.target.value;
    this.setState({
      email: value
      });
  }


  handleSubmit (evt) {
    console.log('not here!')
    evt.preventDefault()
    this.setState({grade: Math.random() * 100})
    const newStudent = this.state;
    this.props.postNewStudent(newStudent)
  }

  render () {
    const newStudent = this.state

    return (

      <NewStudentEntry
        handleNameChange={this.handleNameChange}
        handleEmailChange={this.handleEmailChange}
        handleSubmit={this.handleSubmit}
        newStudent={newStudent}
      />
    );   
  }
}

const mapDispatchToProps = dispatch => ({postNewStudent: (newStudent) => dispatch(postNewStudent(newStudent))})
const mapPropsToState = function(store){
  return{
    newState: store.students
  }
};

export default connect(mapPropsToState, mapDispatchToProps)(StudentsFormContainer)