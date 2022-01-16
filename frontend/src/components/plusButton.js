import styled from 'styled-components'
import {useState} from 'react'

const AddEvent = styled.div`
    height:50px;
    width:50px;
    border-radius:50%;
    position:absolute;
    background-color: #db504a;
    line-height:50px;
    color: white;
    text-align: center;
    z-index: 5;
    transition: .3s ease-in-out;  
    box-shadow: 5px 5px 15px rgba(0,0,0,0.2);
    &:hover {
        cursor: pointer;
        transform: scale(1.2);
        background-color: #ff6f59;
    }
    &:hover i{
        transform: scale(1.5);
    }
    `

    // Bottom: How far the button should be from the bottom of the screen
    // Right: How far it should be from the right of the screen
    // iconName: Use one of the Bootstrap icon names
function PlusButton({bottom,right,iconName}){
    return (     
    <> 
        <AddEvent style={{bottom:bottom,right:right}}>
            <i class={`bi bi-${iconName}`} style={{fontSize:"1rem"}}></i>
        </AddEvent>

    </>)
    ;
}


export default PlusButton;