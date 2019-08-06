import React from 'react'

function NavBarElement(props) {
    return(
        <li>
            <li className="nav-item">
                <a className="nav-link " href="orfIndex.html">{props.item.navButtonName}</a>
            </li>
        </li>
        /**<li className="nav-item dropdown">
         <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
         aria-haspopup="true" aria-expanded="false">Articles</a>
         <div className="dropdown-menu">
         <a className="dropdown-item" href="Brewers.html">Brewers</a>
         <a className="dropdown-item" href="Bucks.html">Bucks</a>
         <a className="dropdown-item" href="College.html">College</a>
         <div className="dropdown-divider"></div>
         <a className="dropdown-item" href="Archives.html">Archives</a>
         </div>
         </li>**/
    )
}

export default NavBarElement