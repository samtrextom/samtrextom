import React from 'react'
import {Link} from 'react-router-dom'
import eventData from "../eventData";

const menuDropDownItems = eventData.map(event=> <li><Link className ={'dropdown-item'} key = {event.id} to = {event.menuLink}><p>{event.eventTitle}</p></Link></li>)

class NavBarElement extends React.Component{

    constructor (props) {
        super(props);

        this.state = {

        };

    }

    isADropDown = () =>{
        if(this.props.item.dropDown)
        {
            return (
                <div className = "nav-item dropdown" >
                    <a className = "nav-link dropdown-toggle" href = "#" id = "navbarDropdown" role = "button" data-toggle = "dropdown" aria-haspopup = "true" aria-expanded = "false" > {this.props.item.navButtonName}</a>
                    <div className="dropdown-menu navbar-dark bg-dark" aria-labelledby="navbarDropdown">
                        {menuDropDownItems}
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to={'/CustomMenu'}>
                            <p>Customize</p>
                        </Link>
                    </div>
                </div>
            )
        }
        else
        {
            return (
                <Link to={this.props.item.linkUrl} className={'nav-tab'}>
                    <div className={'nav-item'}>
                        {this.props.item.navButtonName}
                    </div>
                </Link>
            )
        }
    }

    render(){
            return(
                this.isADropDown()
            )
    }
}

export default NavBarElement