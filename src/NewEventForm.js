import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NewEventForm extends Component {
  constructor(props){
    super(props);

    this.state = { name: '', description: ''};
  }
  
  render() {
    return (
      <form onSubmit={this.save}>
      <input type="text" 
        value={this.state.name}
        onChange={(e) => this.setState({name: e.target.value})} />
      <br/>
      <textarea
        value={this.state.description}
        onChange={(e) => this.setState({description: e.target.value})} />
      </form>
    );
  }
}

export default NewEventForm;
