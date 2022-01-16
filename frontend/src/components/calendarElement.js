import React from 'react'
import { Calendar, Views } from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'

const DragAndDropCalendar = withDragAndDrop(Calendar);
const defaultColor = "#db504a";

const events = [{
    id: 0,
    title: 'CMPUT 401 Study',
    allDay: true,
    start: new Date(2022, 0, 0),
    end: new Date(2022, 0, 1),
  },
  
  {
    id: 8,
    title: 'STAT 151 Group Meeting',
    start: new Date(2022, 0, 28, 8, 0, 0),
    end: new Date(2022, 0, 28, 10, 30, 0),
  },
  {
    id: 11.1,
    title: 'CMPUT 174 quiz',
    start: new Date(2022, 0, 13, 9, 30, 0),
    end: new Date(2022, 0, 13, 12, 0, 0),
  },
  {
    id: 11.2,
    title: "Study SOC 207",
    start: new Date(2022, 0, 13, 11, 30, 0),
    end: new Date(2022, 0, 13, 14, 0, 0),
  },
  {
    id: 11.3,
    title: 'MATH 225 Test',
    start: new Date(2022, 0, 13, 15, 30, 0),
    end: new Date(2022, 0, 13, 16, 0, 0),
  },
  {
    id: 12,
    title: 'CMPUT 401',
    start: new Date(2022, 0, 1, 19, 30, 0),
    end: new Date(2022, 0, 2, 2, 0, 0),
  }];

class DndCalendar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      displayDragItemInCell: true,
    }

    this.moveEvent = this.moveEvent.bind(this)
    this.newEvent = this.newEvent.bind(this)
  }

  handleDragStart = event => {
    this.setState({ draggedEvent: event })
  }

  dragFromOutsideItem = () => {
    return this.state.draggedEvent
  }

  onDropFromOutside = ({ start, end, allDay }) => {
    const { draggedEvent } = this.state

    const event = {
      id: draggedEvent.id,
      title: draggedEvent.title,
      start,
      end,
      
      allDay: allDay,
    }

    this.setState({ draggedEvent: null })
    this.moveEvent({ event, start, end })
  }

  async componentDidMount() {
    try {
      const res = await fetch('http://localhost:8000/api/date/?format=json');
      const getEvents = await res.json();
      const newEvents = getEvents.map((v,i) => {
          return({id:v.id,title:v.Task,start:new Date(v.year,v.month-1,v.date,19,0,0),end:new Date(v.year,v.month-1,v.date,20,0,0)})
      })
      this.setState({
        events: newEvents
      });
    } catch (e) {
      console.log(e);
  }
  }
  moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const { events } = this.state

    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end, allDay }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    fetch(`http://localhost:8000/api/date/${event.id}/`, {
			method: 'PUT',
			body: JSON.stringify({
                "id":event.id,
				"date":start.getDate(),
                "month":start.getMonth() + 1,
                "year":start.getYear() + 1900,
                "Task":event.title,
                "completed":allDay
			}),
			headers: {
			  "Content-type": "application/json; charset=UTF-8"
			}});
  }

  resizeEvent = ({ event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    //alert(`${event.title} was resized to ${start}-${end}`)
  }

  newEvent(event) {
     let idList = this.state.events.map(a => a.id)
     let newId = Math.max(...idList) + 1
     const title = window.prompt('New Event name');
     if (title) {
         // edit database
        let hour = {
            id: newId,
            title: title,
            allDay: false,
            start: event.start,
            end: event.end,
        }
        this.setState({
            events: this.state.events.concat([hour]),
        })
        fetch('http://localhost:8000/api/date/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "date":event.start.getDate(),
                "month":event.start.getMonth() + 1,
                "year":event.start.getYear() + 1900,
                "Task":title,
                "completed":false
            })
        })
     }
     
  }

  
  eventStyleGetter(event, start, end, isSelected) {
        var style = {
            backgroundColor: defaultColor,
        };
        return {
            style: style
        };
    }

    onSelectEvent(pEvent) {
        const r = window.confirm("Would you like to remove this event?")
        if(r === true){
            fetch(`http://localhost:8000/api/date/${pEvent.id}`, { method: 'DELETE' });
          this.setState((prevState, props) => {
            const events = [...prevState.events]
            const idx = events.indexOf(pEvent)
            events.splice(idx, 1);
            return { events };
          });
        }
      }

  render() {
      
    return (
      <DragAndDropCalendar
        selectable
        localizer={this.props.localizer}
        events={this.state.events}
        onEventDrop={this.moveEvent}
        resizable
        onEventResize={this.resizeEvent}
        onSelectSlot={this.newEvent}
        onDragStart={console.log}
        defaultView={Views.MONTH}
        defaultDate={new Date()}
        popup={true}
        onDoubleClickEvent = {event => this.onSelectEvent(event)}
        views={['month']}
        eventPropGetter={(this.eventStyleGetter)}
        dragFromOutsideItem={
          this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
        }
        onDropFromOutside={this.onDropFromOutside}
        handleDragStart={this.handleDragStart}
      />
    )
  }
}

export default DndCalendar