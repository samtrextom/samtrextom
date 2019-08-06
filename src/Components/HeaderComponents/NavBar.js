import React from 'react';
import navBarData from "./NavBarComponents/navBarData";
import NavBarElement from "./NavBarComponents/NavBarElement";

function NavBar() {

    const navButtons = navBarData.map(item=> <NavBarElement key = {item.id} item ={item}/>)

    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul className="nav nav-pills">
                {navButtons}
            </ul>
        </nav>
    );
}

export default NavBar;