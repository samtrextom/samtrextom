import React from 'react';
import LeftFooter from './FooterComponents/LeftFooter'
import MiddleFooter from './FooterComponents/MiddleFooter'
import RightFooter from './FooterComponents/RightFooter'

function Footer() {
    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <LeftFooter/>
                    <MiddleFooter/>
                    <RightFooter/>

                </div>
            </div>
            <div className="footBot">
                Copyright &copy; 2019 Team Red Shoes DevTeam
                {'\n'}
                <a href="samtrextom@gmail.com">samtrextom@gmail.com</a>
            </div>
        </footer>
    );
}

export default Footer;