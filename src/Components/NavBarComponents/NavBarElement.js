import React from 'react'
import {Link} from 'react-router-dom'

function NavBarElement(props) {
    return(
        <Link to={props.item.linkUrl}>
            <li className="nav-item">
                  {props.item.navButtonName}
            </li>
        </Link>
    )
}

export default NavBarElement