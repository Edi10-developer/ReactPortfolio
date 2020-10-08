import React, { Component } from 'react';
import Codeplayer from '../img/Codeplayer/CodePlayer.png';

export default class CodePlayer extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="project" id="project">
                <div className="project-body">
                    <div className="project--description">
                        <h2 className="section__title section__title--project">Codeplayer</h2>
                        <p>
                            This project is a clone of the JS Bin website which is used to write and convert code in real time. <strong>JQuery</strong>.
                        </p>

                        <p>
                            It was made with jquery during a course.
                            It is fully functional and fast.
                        </p>

                        <p>
                            Below the visual reproduction of the project:
                        </p>
                    </div>

                    <div className="project--image">
                        <img src={Codeplayer} />
                        <p>
                            This is a capture of <strong>CodePlayer</strong> just in one page.
                        </p>
                        <br />
                    </div>

                </div>
            </div>
        )
    }
}
