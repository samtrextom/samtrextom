import React from 'react';
import EventTileRows from './EventTileRows'
import PageIntro from "./PageIntro";
import CustomOption from "./CustomOption";

function Body() {

    return (
        <div className="Body">
            <PageIntro/>
            <EventTileRows/>
            <CustomOption/>
        </div>
    );
}

export default Body;