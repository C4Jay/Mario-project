import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard';
import Projectdetails from './components/projects/projectdetails';
import Signin from './components/auth/signin';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
   <Navbar></Navbar>
   <Switch>
     <Route exact path='/' component={Dashboard}></Route>
     
     <Route path='/project/:id' component={Projectdetails}></Route>
     <Route path='/signin' component={Signin}></Route>
   
   </Switch>
       </div>
       </BrowserRouter>
  );
}

export default App;
