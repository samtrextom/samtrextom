import React from 'react';
import {Link} from "react-router-dom";

function LeftFooter() {

    const fbStyles = {
        backgroundImage: `url(FooterIcon/facebookIconLightBlue120.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }

    const igStyles = {
        backgroundImage: `url(FooterIcon/igIconLightBlue120.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }

    const twStyles = {
        backgroundImage: `url(FooterIcon/twitterIconLightBlue120.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }

    const pnStyles = {
        backgroundImage: `url(FooterIcon/pintrestIconLightBlue120.png)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 60%'
    }


    return(
        <div className="col-sm" id="footLeft">
            <h5>Connect With Us</h5>
            <div className='socialMediaIcons'>
                <div className = 'fbIcon' style={fbStyles}></div>
                <div className = 'igIcon' style={igStyles}></div>
                <div className = 'twIcon' style={twStyles}></div>
                <div className = 'pnIcon' style={pnStyles}></div>
            </div>
            <p className='footerPhoneNumber'>(414)123-4567</p>
            <br/>
            <br/>
            <Link>
                <p className='footerContactLink'>Contact Us</p>
            </Link>
        </div>
    )

}

export default LeftFooter