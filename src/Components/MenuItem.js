import React from 'react'

function MenuItem(props) {
    return (
        <div className="MenuItem">
            <h6 className={'menu-item-name'}>{props.name}</h6>
            <p className={'menu-item-description'}>{props.description}</p>
            <p className={'menu-item-price'}>${props.price}</p>
        </div>
    )
}

export default MenuItem