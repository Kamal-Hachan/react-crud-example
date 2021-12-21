
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';
import Example from './components/Example';


function App() {
  return (
    <div className="App">
      
      <Router>
         <Header/>
                <div className="container">
                    <Routes> 
                          <Route path = "/" exact element = {<UserList/>}></Route>
                          {/* <Route path = "/users" element = {<UserList/>}></Route> */}
                          <Route path = "/add-user" element = {<AddUser/>}></Route>
                          <Route path = "/update-user/:id" element = {<UpdateUser/>}></Route>
                          {/* <Route path="/example/:id" element={<Example/>}></Route> */}
                    </Routes>
                </div>
              
        </Router>
      {/* <UserList/>  */}
    </div>
  );
}

export default App;
