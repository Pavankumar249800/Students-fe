import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <center>
                <h3>Welcome to Home Page</h3>               
                <Link to = '/users' >Users</Link>
                <Link to = '/roles' style={{ marginLeft: '5rem' }}>Roles</Link>
                <Link to = '/permissions' style={{ marginLeft: '5rem' }}>Permissions</Link>
            </center>
        </div>
    )
}

export default Home
