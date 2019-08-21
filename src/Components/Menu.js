import React from 'react'
import MenuItem from './MenuItem'
import HeaderImageSlide from "./HeaderComponents/HeaderImageSlide";

class Menu extends React.Component{


    render(){
        return(
            <div className={'menu-page-wrapper'}>
                <HeaderImageSlide image={this.props.event.eventPagePic}/>
                <div className={'container menu-page'}>
                    <h2>{this.props.event.eventTitle}</h2>
                    <p>{this.props.event.eventPageDetails}</p>
                    {this.props.event.menuItems.map(menuItem => <MenuItem key={menuItem.id} name={menuItem.menuItemName} description={menuItem.menuItemDescription} price={menuItem.price} />)}
                </div>
            </div>
        )
    }

}

export default Menu