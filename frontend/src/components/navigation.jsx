import { useState } from "react";
import { Navbar, Container } from 'react-bootstrap';

function Navigation(){
    //const [a, setA] = useState(-1);
    return (     
        <Navbar>
            <Container>
                <Navbar.Brand>Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <p>Mark Otto</p>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default Navigation;