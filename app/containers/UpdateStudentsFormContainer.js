
import React, {Component} from 'react';
import NewStudentEntry from '../components/NewStudentEntry';
import store, {updateStudent} from '../store.jsx'
import {connect} from 'react-redux'

export class UpdateStudentFormContainer extends Component {

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

  handleNameChange (evt) {
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
    evt.preventDefault();
    const id = this.props.match.params.id
    const input = [this.state, id]
    this.props.updateStudent(input);
  }

  render () {
    const updatedStud = this.state;

    return (

      <NewStudentEntry
        handleNameChange={this.handleNameChange}
        handleEmailChange={this.handleEmailChange}
        handleSubmit={this.handleSubmit}
        updatedStud={this.state}
      />
    );   
  }
}

const mapDispatchToProps = dispatch => ({updateStudent: (state) => dispatch(updateStudent(state))})
const mapPropsToState = function(store){
  return{
    newState: store.campuses
  }
};

export default connect(mapPropsToState, mapDispatchToProps)(UpdateStudentFormContainer)