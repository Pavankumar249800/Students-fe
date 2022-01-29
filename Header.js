import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://i.ibb.co/CHtd6nx/Microsoft-Teams-image-1.jpg"
          width="70"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
        />
        <hr />      
        <h5>
          <b>User Management</b>
        </h5>
        <h6>App with React + Django</h6>
        <hr />
        {/* <div>
            <button >Home</button>
        </div> */}
        <nav>
        <button >Home</button>
        </nav>
      </div>
    );
  }
}

export default Header;