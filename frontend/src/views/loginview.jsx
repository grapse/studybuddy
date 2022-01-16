import { useState } from "react";
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const LoginView = styled.div`
    display: flex;
    flex-direction: column;
    size: 200%;
    background-color: white;
    width:      100%;
    height:     100%; 
    z-index:    10;
    top:        0; 
    left:       0; 
    position:   fixed; 

    a{
        align-self: center; 
    }
`;

const TextField = styled.input`
    background-color: #F1F1F1;
    border: none;
    display: flex;
    width: 300px;
    margin: 10px;
    padding: 10px;
    align-self: center;
`;

const Title = styled.div`
    color: #DB504A;
    font-weight: 700;
    font-size: 50px;
    align-self: center;
    padding: 50px;
`;

function Login(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const getUser = () => {
        //TODO: backend stuff
    }

    return (     
        <LoginView>
            <Title>StudyBuddy</Title>
            <TextField 
                type="text" 
                value={username} 
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)} />
            <TextField 
                type="password" 
                value={password} 
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)} />
            <Button style={{backgroundColor:"#db504a",borderColor:"#bb302a",width: '100px', color:'white', margin: '30px'}}  href="/dashboard">Log In</Button>
        </LoginView>
    );
}

export default Login;