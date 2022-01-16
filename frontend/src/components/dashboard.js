import { useState } from "react";
import styled from 'styled-components'

const Images = [{img:'/undraw_timer.svg',name:'Timer',link:'timer',description:'Study for set periods of time.'},
                {img:'/undraw_calendar.svg',name:'Calendar',link:'calendar',description:'Keep track of your homework and tests.'},
                {img:'/undraw_flashcards.svg',name:'Flashcards',link:'flashcards',description:'Review your classes.'}]


const Holder = styled.div`
    display:flex;
    flex-direction:column;
    margin:20px;
    text-align:center;`
const Icons = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 90%;
    justify-content: center;
    align-items: flex-end;
    margin:auto;
    `
const Icon = styled.a`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 30px;
    text-align: center;
    padding:20px;
    transition: .3s ease-in-out;
    
    img{
        transition: .3s ease-in-out;
    }

    &:hover {
        cursor: pointer;
        color: #db504a;
    }
    &:hover img{
        transform: scale(1.1);
        transition: .3s ease-in-out;
    }
    &:hover Title{
        
    }
    `
const Title = styled.div`
    margin-top:50px;
    font-weight:500;
    font-size: 1.2rem;
    `
const Titlesmall = styled.div`
    font-size:1rem;
    font-weight:300;
    `
const Prompt = styled.div`
    font-size:3rem;
    font-weight:200;
    margin-top:30px;`

const Promptsmall = styled.div`
    font-size:1rem;
    font-weight:200`

function Dashboard(){
    return (     
    <> 
        <Holder>
            <Prompt>Let's get studying!</Prompt>
            <Promptsmall>What would you like to do today?</Promptsmall>
            <Icons>
                {Images.map((v,i) => {
                    return(
                        <Icon href={v.link}>
                            <img src={v.img} alt={v.name}></img>
                            <Title>{v.name}</Title>
                            <Titlesmall>{v.description}</Titlesmall>
                        </Icon>
                    )
                })}
            </Icons>
        </Holder>

    </>)
    ;
}


export default Dashboard;