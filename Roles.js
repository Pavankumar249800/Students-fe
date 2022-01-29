import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import RolesList from "./RolesList";
import RoleNewModal from "./RoleNewModal";

import axios from "axios";

import { API_URLRole } from "../constants";


class Roles extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    this.resetState();
  }

  getStudents = () => {
    axios.get(API_URLRole).then(res => this.setState({ students: res.data }));
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
            <RolesList
              students={this.state.students}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <RoleNewModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
      
    );
    
  }
  
}

export default Roles;