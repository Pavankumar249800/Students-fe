import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import UsersList from "./UsersList";
import NewUserModal from "./NewUserModal";

import axios from "axios";

import { API_URL } from "../constants";


class Users extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    this.resetState();
  }

  getStudents = () => {
    axios.get(API_URL).then(res => this.setState({ students: res.data }));
  };

  resetState = () => {
    this.getStudents();
  };

  render() {
    <Link to = '/'>Back to Home</Link>
    return (
        
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <UsersList
              students={this.state.students}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewUserModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
      
    );
    
  }
  
}

export default Users;