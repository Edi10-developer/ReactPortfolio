import React, { Component } from 'react';
import MusicAppItem from './../img/musicAppItem.jpg';

export default class MusicApp extends Component {
    render() {
        return (
            <div className="project" >
                <div className="project-body">
                    <div className="project--description">
                        <h2 className="section__title section__title--project">Music App</h2>
                        <p>
                            This is a music app developed with <strong>Vanilla JavaScript</strong>.
                    </p>

                        <p>

                        The design is creative, dynamic and easy to understand.
                   </p>
                        <p>
                            Below the visual reproduction of the project:
                    </p>
                    </div>
                    <div className="project--image">
                        <img src={MusicAppItem} />
                        <br/>
                    </div>
                   
                    <p>
                        Here is the <a href="https://github.com/Edi10-developer/Music-App---Vanilla-JavaScript"><strong>Link </strong></a>of the project code.
                    </p>
                </div>

            </div>
        )
    }
}
