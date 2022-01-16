
import { Navbar, Container, Nav, Button} from 'react-bootstrap';
import styled from 'styled-components';

const NavItem = styled.div`
    position:relative;
    &:after{
      display: block;
      content: '';
      width: 0%;
      height: 2px;
      background: #db504a;
      position: absolute;
      bottom: 0;
      left: 0;
      transition:0.3s ease-in-out;
    }
    &:hover:after{

      width: 100%;

      transition:0.3s ease-in-out;
    }
    `
const NavItemSelect = styled.div`
    position:relative;
    &:after{
      display: block;
      content: '';
      width: 100%;
      height: 2px;
      background: #db504a;
      position: absolute;
      bottom: 0;
      left: 0;
      transition:0.3s ease-in-out;
    }
    `

function Navigation({path}){
    return (     
    <> 
        <Navbar bg="#fff" style={{height:"10vh",paddingLeft:"0px",boxShadow:"0px 0px 3px #888888"}} expand="lg">
          <Container>
            <Navbar.Brand style={{color:"#db504a",fontWeight:"700"}} href="/">StudyBuddy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/timer">{path === "/timer" ? <NavItemSelect>Timer</NavItemSelect> : <NavItem>Timer</NavItem>}</Nav.Link>
                <Nav.Link href="/calendar">{path === "/calendar" ? <NavItemSelect>Calendar</NavItemSelect> : <NavItem>Calendar</NavItem>}</Nav.Link>
                <Nav.Link href="/flashcards">{path === "/flashcards" ? <NavItemSelect>Flashcards</NavItemSelect> : <NavItem>Flashcards</NavItem>}</Nav.Link>
              </Nav>
              <Nav className="justify-content-end">
                <Button style={{backgroundColor:"#db504a",borderColor:"#bb302a"}}>Log In</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>)
    ;
}


export default Navigation;