import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppHeader } from './Components/AppHeader/AppHeader';
import Footer from './Components/Footer'
//import { Container } from 'semantic-ui-react'
import DashBoard from "./routes/DashBoard/DashBoard";
import LoginPage from "./routes/Login/login";
import {Appoinments} from './routes/Appoinments'
import {ContactForm} from './routes/ContactForm'
import {DoctorEnquire} from './routes/DoctorEnquire'
import "./App.style.scss"
function App() {
  return (
    <Router>
       <AppHeader/>
       <div className="Appcontainer">
        <Route path='/login' component={LoginPage}/>
        <Route path="/appoinments" component={Appoinments}/>
        <Route path="/Contact-form" component={ContactForm}/>
        <Route path="/doctor-enquire" component={DoctorEnquire}/>
        <Route path='/' component={DashBoard} exact /> 
        </div>
        <Footer/>
    </Router>
    
  );
}

export default App;
