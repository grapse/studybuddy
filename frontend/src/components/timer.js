import { useState } from "react";
import styled from 'styled-components'
import CounterTimer from './counterTimer'
import PomodoroTimer from "./pomodoroTimer";
import RegularTimer from "./regularTimer";

const defaultColor = "#db504a";

const timerIcons = [
    {icon:'alarm-fill',name:"Regular",description:"Pick a duration to study",
    timer:<><RegularTimer></RegularTimer></>},

    {icon:'clock-history',name:'Pomodoro',description:"Pace yourself for breaks!",
    timer:<><PomodoroTimer></PomodoroTimer></>},

    {icon:'stopwatch',name:"Stopwatch",description:"Click before and after studying, and see how long you studied!",
    timer:<><CounterTimer></CounterTimer></>}

]

const Holder = styled.div`
    display: flex;
    flex-direction: row;
    margin: 50px;
    width: 90%;
    height: 90%;
    justify-content: center;
    transition: .3s ease-in-out;
    `
const Icons = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    text-align:center;
    transition: .3s ease-in-out;
`
const Icon = styled.div`
    margin-top:50px;
    color:#db504a;
    transition: .3s ease-in-out;
    &:hover{
        cursor:pointer;
    }
`
const IconText = styled.div`
    font-size:1rem;
`

const MainTimer = styled.div`
    padding: 100px;
    width:80%
    
`

function Timer(){
    const [timer, setTimer] = useState(0);
    return (     
    <> 
        <Holder>
            <Icons>
                {timerIcons.map((v,i) => {
                    return(
                        <>
                            <Icon>
                                <i onClick={() => setTimer(i)} class={`bi bi-${v.icon}`} style={{transition: ".3s ease-in-out",fontSize: timer === i ? "75px" : "50px"}}></i>
                            </Icon>
                            <IconText>
                                {v.name}
                            </IconText>
                            {timer === i ? <div>{v.description}</div> : null}
                        </>
                        
                        
                    )
                })}
            </Icons>
            <MainTimer>
                {timerIcons[timer].timer}
            </MainTimer>
        </Holder>
    </>)
    ;
}


export default Timer;