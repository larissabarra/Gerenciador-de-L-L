import React, { Component } from 'react';
import './App.css';

class NewEventForm extends Component {
  constructor(props){
    super(props);

    this.state = { name: '', description: '', date: '', time: ''};
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
      <br/>
      <input type="date"
      value={this.state.date}
      onChange={(e) => this.setState({date: e.target.value})} />
      <br/>
      <input type="time"
      value={this.state.time}
      onChange={(e) => this.setState({time: e.target.value})} />
      </form>
    );
  }
}

export default NewEventForm;
