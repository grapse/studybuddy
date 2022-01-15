import { useState } from "react";
import styled, { css } from 'styled-components'

const Images = [{img:'/undraw_timer.svg',name:'Timer'},
                {img:'/undraw_calendar.svg',name:'Calendar'},
                {img:'/undraw_flashcards.svg',name:'Flashcards'}]

const Icons = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px;
    width: 90%;
    height: 90%;
    justify-content: center;
    align-items: flex-end;
    margin:auto;
    `
const Icon = styled.div`
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

function Dashboard({imgdata}){
    const [a, setA] = useState(-1);
    return (     
    <> 
        <Icons>
            {Images.map((v,i) => {
                return(
                    <Icon>
                        <img src={v.img} alt={v.name}></img>
                        <Title>{v.name}</Title>
                    </Icon>
                )
            })}
        </Icons>
    </>)
    ;
}


export default Dashboard;