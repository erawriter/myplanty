import React from 'react';
import { Link } from 'react-router-dom';

//{' '} creates a space between the social icons in jsx

function Footer(props) {
    return (
        <footer className="site-footer mt-2">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to=''>Home</Link></li>
                            <li><Link to='/Plantcare'>Plant Care</Link></li>
                            <li><Link to='/About'>About</Link></li>
                            <li><Link to='/Localshops'>Local Shops</Link></li>
                        </ul>
                    </div>
                    <div className="col text-right mt-3 mb-3">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '} 
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;