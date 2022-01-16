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
    &:hover{
        cursor:pointer;
    }
    `

function RegularTimer(props){
    const {initialMinute = 30,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    const [pause, setPause] = useState(true);
    useEffect(()=>{
        if(!pause){
            let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                    setPause(true);
                    window.alert("Congratulations for studying until the end!");
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
        }
    
    });
    function handleChange(event) {
        setMinutes(event.target.value);
        setSeconds(0);
      }

    return (
        <Holder>
        { <><h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        <Icon><i onClick={() => setPause(!pause)} class={`bi bi-${pause ? "play-circle" : "pause-circle"}`}></i></Icon>
        </>
        }
        
        <div>Set Minutes</div>
        <input
            disabled={!pause}
            type="number"
            step="1"
            min="0"
            max="60"
            placeholder="progress"
            value={minutes} 
            onChange={pause ? ((event) => handleChange(event)) : null}
        ></input>
        </Holder>
    )
}


export default RegularTimer;