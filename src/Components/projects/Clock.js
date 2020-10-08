import React, { Component } from 'react';
import CanvasTime from '../img/CanvasTime/CanvasTime.png';

export default class Clock extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="project" id="project">
                <div className="project-body">
                    <div className="project--description">
                        <h2 className="section__title section__title--project">Clock</h2>
                        <p>
                            This project is an automatic watch made with <strong>Canvas</strong>.
                        </p>

                        <p>
                           It is a clock perfectly synchronized with the Barcelona time (UTC / GMT +1).
                        </p>

                        <p>
                            Below the visual reproduction of the project:
                        </p>
                    </div>

                    <div className="project--image">
                        <img src={ CanvasTime} />
                        <p>
                            This is a capture of the <strong>Clock Project</strong> just in one page.
                        </p>
                        <br />
                        </div>

                        <p>
                           Here is the <a href="https://github.com/Edi10-developer/Canvas-Watch"><strong>Link </strong></a>of the project code.
                        </p>

                </div>
            </div>

        );
    }
}
