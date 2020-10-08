import React, { Component } from 'react';
import Edi from './img/edi.jpeg';

export default class Introduction extends Component {
    render() {
        return (
            <div className="intro" id="home">
        <h1 className="section__title section__title--intro">
            Hi.<br/> I am <strong>Edi Selimi</strong>
        </h1>
        <div className="intro__img">
        <img src={Edi} alt="Edi" />
        </div>
        <p className="section__subtitle section__subtitle--intro">Front-end Dev</p>
        <div id="animation">Welcome to Edi's Portfolio</div>
       
            </div>
        );
    }
}
