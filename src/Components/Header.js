import React, { Component } from 'react';
import LogoEdi from './img/logoEdi.jpg';
import { Link } from 'react-router-dom';

 class Header extends Component {

    render() {
        return (
            <div id="header">
            <div className="logo">
            <Link to="/"><img src={LogoEdi} alt="logo edi"/></Link>
            </div>
            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger">  </span>
            </button>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="/#home" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="/#services" className="nav__link">My Services</a></li>
                    <li className="nav__item"><a href="/#about" className="nav__link">About Me</a></li>
                    <li className="nav__item"><a href="/#work" className="nav__link">My Work</a></li>
                </ul>
            </nav>
        </div>
        );
    }
}

export default Header;


