import React, {Component} from 'react';
import {connect} from 'react-redux'
import NewCampusEntry from '../components/NewCampusEntry';
import store, {postNewCampus} from '../store.jsx'

export class CampusesFormContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
        name: '',
        location: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange (evt) {
    const value = evt.target.value;
    this.setState({
      name: value
      });
  }

  handleLocationChange (evt) {
    const value = evt.target.value;
    this.setState({
        location: value
      });
  }

  handleSubmit (evt) {
    console.log("hiiii:",  this.props)
    const newCampus = this.state;
    this.props.postNewCampus(newCampus);
  }

  render () {
    const newCampus = this.state.newCampus;

    return (

      <NewCampusEntry
        handleNameChange={this.handleNameChange}
        handleLocationChange={this.handleLocationChange}
        handleSubmit={this.handleSubmit}
        newCampus={this.state}
      />
    );   
  }
}

const mapDispatchToProps = dispatch => ({postNewCampus: (newCampus) => dispatch(postNewCampus(newCampus))})
const mapPropsToState = function(store){
  return{
    newState: store.campuses
  }
};

export default connect(mapPropsToState, mapDispatchToProps)(CampusesFormContainer)


