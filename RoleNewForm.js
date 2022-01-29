import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URLRole } from "../constants";

class RoleNewForm extends React.Component {
  state = {
    id: 0,
    name: "",
    description: "",
   };

  componentDidMount() {
    if (this.props.student) {
      const { id, name, description } = this.props.student;
      this.setState({ id, name, description});
    }
  }

  onChange = e => {
    
    this.setState({ [e.target.name]: e.target.value });
  };
  

  createStudent = e => {
    e.preventDefault();    
    //alert(this.state.usernameasemail);
    //console.log("username",this.state.username);
    axios.post(API_URLRole, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();  
    });
  };
  
  editStudent = e => {
    e.preventDefault();
    axios.put(API_URLRole + this.state.id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.student ? this.editStudent : this.createStudent}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            type="text"
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
          />
        </FormGroup>
        
        <Button >Send</Button>
      </Form>
    );
  }
}

export default RoleNewForm;