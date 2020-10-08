import React, { Component } from 'react';
import Portfolio from '../img/Portfolio.png';

import { Link } from 'react-router-dom';

export default class PortfolioTemplate extends Component {
    
    componentDidMount(){
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="project" id="project">
                <div className="project-body">
                    <div className="project--description">
                        <h2 className="section__title section__title--project">Portfolio</h2>
                        <p>
                            This is a simple Porfolio page created with <strong>CSS3</strong>.
                        </p>

                        <p>
                            It has been programmed through the use of <strong>Flexbox </strong>of <strong>CSS</strong> which facilitates the positioning of divs and elements.
                            It is also totally responsive.
                            It is a ready-to-use template.
                        </p>

                        <p>
                            Below the visual reproduction of the project:
                        </p>
                    </div>

                    <div className="project--image">
                        <img src={Portfolio} />
                        <p>
                            This is a capture of the <strong>Portfolio template</strong>.
                        </p>
                        <br />
                        <p>
                           Here is the <a href="https://github.com/Edi10-developer/Porftfolio---Flexbox"><strong>Link </strong></a>of the project code.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

