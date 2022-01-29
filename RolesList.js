import React, { Component } from "react";
import { Table } from "reactstrap";
import RoleNewModal from "./RoleNewModal";
import ConfirmRoleRemovalModal from "./ConfirmRoleRemovalModal";

class RolesList extends Component {
  render() {
    const students = this.props.students;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>CreatedOn</th>
            <th>ModifiedOn</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!students || students.length <= 0 ? (
            <tr>
              <td colSpan="4" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.description}</td>
                <td>{student.created_on}</td>
                <td>{student.modified_on}</td>
                <td align="center">
                  <RoleNewModal
                    create={false}
                    student={student}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRoleRemovalModal
                    id={student.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default RolesList;