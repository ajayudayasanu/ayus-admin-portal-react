import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AppHeader } from './Components/AppHeader/AppHeader';
import Footer from './Components/Footer'
//import { Container } from 'semantic-ui-react'
import DashBoard from "./routes/DashBoard/DashBoard";
import LoginPage from "./routes/Login/login";
function App() {
  return (
    <Router>
       <AppHeader/>
        <Route path='login' component={LoginPage}/>
        <Route path='/' component={DashBoard} exact />  
        <Footer/>
    </Router>
    
  );
}

export default App;
