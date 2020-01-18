import React from 'react';

function Footer() {
    return (
        <div className="footer-block">
            <div className="row">
                <div className="col-md-12">
                    <div className="footer p-3 mt-4 text-center bg-dark text-light">
                        Developed By:
                        <span className="text-warning font-weight-normal"> Faouzi EDRISSI </span>
                        Using ReactJS <i className="fab fa-react" /> Redux &
                        <a href="http://omdbapi.com/" target="_blank" rel="noopener noreferrer"> OMDP API</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;