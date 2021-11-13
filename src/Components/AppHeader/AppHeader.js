import React from "react";
import {Link} from 'react-router-dom'
import {
  Container,
  Image,
  Menu,
  Icon
} from 'semantic-ui-react'
import './Styles.scss'
export const AppHeader = () => {
  // const LogoUri = "images/AyusLogo.png";
  return (
    <Menu borderless fixed='top' >
    <Container className="appHeader">
      <Link to="/">
      <Menu.Item as='a' header className="ayuslogo">
        <Image size='tiny' src='/images/logo.png' style={{ marginRight: '1.5em' }} />
        {/* <Header as='h2' className="mainHeading">Book your Appoinment</Header> */}
      </Menu.Item>
      </Link>
      <Menu.Item as='a' position="right"><Icon name="bars" size="large"/></Menu.Item>
    </Container>
  </Menu>
  );
};
