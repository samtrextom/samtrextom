import React from 'react'
import {Link} from 'react-router-dom'

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
                    <Link to={this.props.event.menuLink}>
                        <a href="#" className="info">See Menu</a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default EventTile