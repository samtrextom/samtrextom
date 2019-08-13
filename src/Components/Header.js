import React from 'react'
import NavBar from "./NavBarComponents/NavBar";
import HeaderCarousel from './HeaderComponents/HeaderCarousel'

function Header(){
    return(
        <header>
            <NavBar/>
            <HeaderCarousel/>
        </header>
    )
}

export default Header