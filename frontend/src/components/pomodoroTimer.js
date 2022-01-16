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

function PomodoroTimer(props){
    const {initialMinute = 25, initialSeconds = 0,initialRest = 5, initialRestSeconds = 0} = props;
    //const {initialMinute = 0, initialSeconds = 2,initialRest = 0, initialRestSeconds = 2} = props;
    const [reps, setReps] = useState(5);
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [breakMinutes, setBreakMinutes] = useState(initialRest);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    const [breakSeconds, setBreakSeconds] = useState(initialRestSeconds);
    const [pause, setPause] = useState(true);
    const [breakPause, setBreakPause] = useState(true);
    const [breakMode, setBreakMode] = useState(false);
    useEffect(()=>{
        if(!pause){
            let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                    if(reps === 1){
                        setPause(true);
                        
                    }
                    else{
                        setPause(true);
                        setBreakPause(false);
                        setBreakMode(true);
                        setMinutes(initialMinute);
                        setSeconds(initialSeconds);
                        alert("Time to take a break!");
                    }
                    
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
        if(!breakPause){
            let myInterval = setInterval(() => {
            if (breakSeconds > 0) {
                setBreakSeconds(breakSeconds - 1);
            }
            if (breakSeconds === 0) {
                if (breakMinutes === 0) {
                    clearInterval(myInterval);
                    if(reps === 1){
                        setBreakPause(true);
                        
                    }
                    else{
                        setBreakPause(true);
                        setPause(false);
                        setBreakMode(false);
                        setBreakMinutes(initialRest);
                        setBreakSeconds(initialRestSeconds);
                        alert("Time to get back to work!");
                    }
                    
                } else {
                    setBreakMinutes(breakMinutes - 1);
                    setBreakSeconds(59);
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
      function handleChangeBreak(event) {
        setBreakMinutes(event.target.value);
        setBreakSeconds(0);
      }

    return (
        <Holder>
        { <><h1 style={{color:breakMode ? "#ccc" : "#000"}}>Study: {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
            <h1 style={{color:breakMode ? "#000" : "#ccc"}}>Break: {breakMinutes}:{breakSeconds < 10 ?  `0${breakSeconds}` : breakSeconds}</h1> 
        </>
        }
        <TimerHolder>
            <Icon><i onClick={() => (breakMode ? setBreakPause(!breakPause) : setPause(!pause))} 
                 class={`bi bi-${pause && breakPause ? "play-circle" : "pause-circle"}`}></i>
            </Icon>
            <Icon><i onClick={() => {setBreakPause(true);setPause(false);setBreakMode(false)}} 
                    class={`bi bi-${"arrow-clockwise"}`}></i>
            </Icon>
        </TimerHolder>
        
        <div>Set Study Minutes</div>
        <input
            disabled={!(pause && breakPause)}
            type="number"
            step="1"
            min="0"
            max="60"
            placeholder="0"
            value={minutes} 
            onChange={pause ? ((event) => handleChange(event)) : null}
        ></input>
        <div>Set Break Minutes</div>
        <input
            disabled={!(pause && breakPause)}
            type="number"
            step="1"
            min="0"
            max="60"
            placeholder="0"
            value={breakMinutes} 
            onChange={pause ? ((event) => handleChangeBreak(event)) : null}
        ></input>
        </Holder>
    )
}


export default PomodoroTimer;