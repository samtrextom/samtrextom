import React from "react"
import eventData from './eventData'
import EventTile from './EventTile'
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom'


const events = eventData.map(event=> <EventTile key = {event.id} event ={event}/>)

class EventTileRows extends React.Component{



    render(){



        return(
            <div className="container event-tile-rows">
                <div className="row">
                    <div className="col-4">
                        <EventTile event = {events[0].props.event} />
                    </div>
                    <div className="col-4">
                        <EventTile event = {events[1].props.event}/>
                    </div>
                    <div className="col-4">
                        <EventTile event = {events[2].props.event}/>
                    </div>

                    <div className="w-100"></div>

                    <div className="col-4">
                        <EventTile event = {events[3].props.event}/>
                    </div>
                    <div className="col-4">
                        <EventTile event = {events[4].props.event}/>
                    </div>
                    <div className="col-4">
                        <EventTile event = {events[5].props.event}/>
                    </div>

                    <div className="w-100"></div>

                    <div className="col-4">
                        <EventTile event = {events[6].props.event}/>
                    </div>
                    <div className="col-4">
                        <EventTile event = {events[7].props.event}/>
                    </div>
                    <div className="col-4">
                        <EventTile event = {events[8].props.event}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default EventTileRows
