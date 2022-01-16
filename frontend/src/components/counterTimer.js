import { useState, useEffect } from "react";
import styled from 'styled-components'

const Holder = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;
    width: 90%;
    height: 90%;
    justify-content: center;
    align-items:center;
    transition: .3s ease-in-out;
  
    `

const Icon = styled.div`
    color:#db504a;
    font-size:2rem;
    margin:10px;
    &:hover{
        cursor:pointer;
    }
    `
    const TimerHolder = styled.div`
    display:flex;
    flex-direction:row;`

function CounterTimer(props){
    const {initialMinute = 0,initialSeconds = 0, initialHours = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    const [hours, setHours] = useState(initialHours);
    const [pause, setPause] = useState(true);
    useEffect(()=>{
        if(!pause){
            let myInterval = setInterval(() => {
            if (seconds < 59) {
                setSeconds(seconds + 1);
            }
            if (seconds === 59) {
                if(minutes === 59){
                    setHours(hours + 1);
                    setMinutes(0);
                    setSeconds(0)
                }
                else{
                    setMinutes(minutes + 1);
                    setSeconds(0);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
        }
    
    });
    function reset(event) {
        setMinutes(0);
        setSeconds(0);
        setHours(0);
        setPause(true);
      }

    return (
        <Holder>
        { <><h1>{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        <TimerHolder>
            <Icon><i onClick={() => (setPause(!pause))} 
                 class={`bi bi-${pause? "play-circle" : "pause-circle"}`}></i>
            </Icon>
            <Icon><i onClick={() => {reset()}} 
                    class={`bi bi-${"arrow-clockwise"}`}></i>
            </Icon>
        </TimerHolder>
        </>
        }
        
        </Holder>
    )
}


export default CounterTimer;