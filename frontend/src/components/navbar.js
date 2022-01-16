import { useState } from "react";
import { Navbar, Container, Nav} from 'react-bootstrap';

function Navigation({imgdata}){
    return (     
    <> 
        <Navbar bg="#fff" style={{height:"10vh",paddingLeft:"0px"}} expand="lg">
          <Container>
            <Navbar.Brand style={{color:"#db504a"}} href="/">StudyBuddy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>)
    ;
}


export default Navigation;