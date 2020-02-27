import React from 'react';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import Projectdetails from './components/projects/projectdetails';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Createproject from './components/projects/createproject';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Navbar></Navbar>
   <Switch>
     <Route exact path='/' component={Dashboard}></Route>
     
     <Route path='/project/:id' component={Projectdetails}></Route>
     <Route path='/signin' component={Signin}></Route>
     <Route path='/signup' component={Signup}></Route>
     <Route path='/createproject' component={Createproject}></Route>
   
   </Switch>
       </div>
       </BrowserRouter>
  );
}

export default App;
