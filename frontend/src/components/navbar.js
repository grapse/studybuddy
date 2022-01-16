import { useState } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';

function Navigation({imgdata}){
    const [a, setA] = useState(-1);
    return (     
    <> 
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Test</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/flashcard">Flashcards</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>)
    ;
}


export default Navigation;