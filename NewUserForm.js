import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewUserForm extends React.Component {
  state = {
    id: 0,
    name: "",
    email: "",
    usernameasemail:"",
    username:""
  };

  componentDidMount() {
    if (this.props.student) {
      const { id, name, email, usernameasemail, username } = this.props.student;
      this.setState({ id, name, email, usernameasemail, username});
    }
  }

  onChange = e => {
    
    this.setState({ [e.target.name]: e.target.value });
  };
  

  createStudent = e => {
    e.preventDefault();    
    alert(this.state.usernameasemail);
    console.log("username",this.state.username);
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();  
    });
  };
  
  editStudent = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.id, this.state).then(() => {
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
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="usernameasemail">UserNameasEmail:</Label>
          <Input
            type="radio"
            name="usernameasemail"
            onChange={this.onChange}
           // value={this.defaultIfEmpty(this.state.usernameasemail)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="username">UserName:</Label>
          <Input
            type="text"
            name="username"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.username)}
          />
        </FormGroup>
        
        <Button >Send</Button>
      </Form>
    );
  }
}

export default NewUserForm;