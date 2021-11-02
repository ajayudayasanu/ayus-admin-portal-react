import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'semantic-ui-react'
import DashBoard from "./routes/DashBoard/DashBoard";
import LoginPage from "./routes/Login/login";
function App() {
  return (
    <Router>
      <div>Header</div>
      <Container>
        <Route path='login' component={LoginPage}/>
        <Route path='/' component={DashBoard} exact />
      </Container>
    </Router>
  );
}

export default App;
