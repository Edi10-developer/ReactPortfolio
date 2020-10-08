import React, { Component } from 'react'
import Introduction from './Introduction'
import Services from './Services';
import AboutMe from './AboutMe';
import Works from './Works';

export default class Content extends Component {
    render() {
        return (
            <div>
                <Introduction />
                <Services /> 
               <AboutMe /> 
               <Works />
            </div>
        )
    }
}
