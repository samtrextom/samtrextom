import React from 'react'
import pageIntroData from './pageIntroData'

class PageIntro extends React.Component{

    render(){

        return(
            <div className="container pageIntro">
                <h3>{pageIntroData[0].introHeader}</h3>
                <p>{pageIntroData[0].text}</p>
            </div>
        )
    }
}

export default PageIntro