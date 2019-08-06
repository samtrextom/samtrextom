import React from 'react'

class EventTile extends React.Component{

    render(){

        return(
            <div className={"event-tile"}>
                <div className={"tile-photo"}>
                    <img src = {this.props.event.homePagePic}/>
                    <h3 className={"tile-title"}>{this.props.event.eventTitle}</h3>
                </div>
                <div className="mask"></div>
                <div className="content">
                    <h2>{this.props.event.eventTitle}</h2>
                    <p>{this.props.event.eventDescription}</p>
                    <a href="#" className="info">Read More</a>
                </div>
            </div>
        )
    }
}

export default EventTile