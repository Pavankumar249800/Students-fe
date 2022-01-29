import React, { Component, Fragment } from "react";
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Users from "./components/Users";
import Roles from "./components/Roles";
import Permissions from './components/Permissions';


class App extends Component {
  render() {
    return (          
      <Fragment>
        <Header />
        {/* <Home /> */}
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/roles' element={<Roles/>} />
        <Route path='/permissions' element={<Permissions/>} />
        
      </Routes>
    </BrowserRouter>
  
        {/* <Users /> */}
      </Fragment>
    );
  }
}

export default App;