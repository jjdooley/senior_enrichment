// C & P from Campus container

import React, {Component} from 'react';
import NewCampusEntry from '../components/NewCampusEntry';
import {connect} from 'react-redux'
import store, {updateCampus} from '../store.jsx'

export default class UpdateCampusFormContainer extends Component {

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
    evt.preventDefault();
    updateNewCampus(this.state, this.props.match.params.id);
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