import React from "react";
import { Container, Card, Header, Grid, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./style.scss";
const DashBoard = () => {
  return (
    <Container className="dash-board">
      <Header className="welcome-header">Welcome to Ayus</Header>
      <Grid columns={2} >
        <Grid.Row>
          {/* Appoinments */}
          <Grid.Column>
            <Link to="/appoinments">
            <Card>
              <Card.Content header="Appoinments" />
              <Card.Content description="find the Appoinment list for Ayus Ayurveda" />
              <Card.Content extra>
                <Icon name="calendar alternate outline" />4 Appoinments
              </Card.Content>
            </Card>
            </Link>
          </Grid.Column>

          {/* Doctor enquire */}
          <Grid.Column>
          <Link to="/doctor-enquire">
            <Card>
              <Card.Content header="Doctor enquire" />
              <Card.Content description="find the Doctor enquire list for Ayus Ayurveda" />
              <Card.Content extra>
                <Icon name="calendar alternate outline" />4 Doctor enquire
              </Card.Content>
            </Card>
            </Link>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>

        {/* Contact Form */}
        <Grid.Column>
            <Link to="contact-form">
            <Card>
              <Card.Content header="Contact Form" />
              <Card.Content description="find the Contact Form list for Ayus Ayurveda" />
              <Card.Content extra>
                <Icon name="calendar alternate outline" />4 Contact Form entry 
              </Card.Content>
            </Card>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
export default DashBoard;
