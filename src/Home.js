import React from "react"
import HeaderCarousel from "./Components/HeaderComponents/HeaderCarousel";
import CustomOption from './Components/CustomOption'
import EventTileRows from './Components/EventTileRows'
import PageIntro from './Components/PageIntro'

class Home extends React.Component{

    render(){

        return(
            <div className = "Home">
                <HeaderCarousel/>
                <PageIntro/>
                <EventTileRows/>
                <CustomOption/>
            </div>
        )

    }
}

export default Home