import styled from 'styled-components'
import PlusButton from './plusButton';
import DndCalendar from './calendarElement';
import moment from 'moment'
import { momentLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import { Modal, OverlayTrigger, Button} from 'react-bootstrap';
import { useState } from 'react';


const localizer = momentLocalizer(moment)

const defaultColor = "#db504a";

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

    
const CalendarHolder = styled.div`
    height: 90vh;
    padding: 20px;
    `
const modalMsg = "Store your homework, tests, and whatever you want here to keep track!\n\nClick a date to add an event\nClick an event to delete it\nDrag an event to move it"

function Calendar(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (     
    <>  
        <AddEvent onClick={() => handleShow()} style={{bottom:"5vh",right:"2.5vw"}}>
            <i class={`bi bi-question-lg`} style={{fontSize:"1rem"}}></i>
        </AddEvent>

        <Modal show={show} onHide={handleClose} style={{whiteSpace:"pre-line"}}>
            <Modal.Header closeButton>
            <Modal.Title  style={{whiteSpace:"pre-line",textAlign:"center"}}>StudyBuddy Calendar</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalMsg}</Modal.Body>
            <Modal.Footer>
            <Button variant="primary" style={{backgroundColor:defaultColor}} onClick={handleClose}>
                Ok!
            </Button>
            </Modal.Footer>
        </Modal>
        
        <CalendarHolder>
            <DndCalendar localizer={localizer}></DndCalendar>
        </CalendarHolder>

    </>)
    ;
}


export default Calendar;