import React from 'react'

function MenuItem(props) {
    return (
        <div className="MenuItem">
            <input type = "checkbox" checked = {props.item.checked}/>
            <img src = {props.item.imgURL}/>
            <h3>{props.item.itemName}</h3>
            <p>{props.item.itemDetails}</p>
            <p>Price: {props.item.itemPrice}</p>
        </div>
    )
}

export default MenuItem