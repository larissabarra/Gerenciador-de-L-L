import React, { Component } from 'react';
import { Jumbotron, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
// import './App.css';

const styles = {
  padding: '0 20%',
  // textAlign: 'center'
}

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}


class NewEventForm extends Component {
  constructor(props){
    super(props);
    this.state = { name: '', description: '', date: '', time: ''};
  }

  render() {
    return (
      <div style={styles}>
        <h1>Novo Evento</h1>
        <form>
          <FormGroup
            controlId="formBasicText"
          >
            <FieldGroup
              label="Nome"
              value={this.state.name}
              placeholder="Informe o nome do evento"
              onChange={(e) => this.setState({ name: e.target.value })}
            />

            <FieldGroup
              value={this.state.descricao}
              label="Descrição"
              componentClass="textarea" 
              placeholder="Conte um pouco mais sobre o evento..."
              onChange={(e) => this.setState({ descricao: e.target.value })}
            />
          </FormGroup>
        </form>
      </div>
      // <form onSubmit={this.save}>
      // <input type="text" 
      //   value={this.state.name}
      //   onChange={(e) => this.setState({name: e.target.value})} />
      // <br/>
      // <textarea
      //   value={this.state.description}
      //   onChange={(e) => this.setState({description: e.target.value})} />
      // <br/>
      // <input type="date"
      // value={this.state.date}
      // onChange={(e) => this.setState({date: e.target.value})} />
      // <br/>
      // <input type="time"
      // value={this.state.time}
      // onChange={(e) => this.setState({time: e.target.value})} />
      // </form>
    );
  }
}

export default NewEventForm;
