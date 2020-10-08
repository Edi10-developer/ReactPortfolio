import React, { Component } from 'react';
import VideoGame from '../img/Videogame/Videogame.png';

export default class Videogame extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="project" id="project">
                <div className="project-body">
                    <div className="project--description">
                        <h2 className="section__title section__title--project">Videogame</h2>
                        <p>
                            This is a simple video game created during a <strong>JavaScript </strong> course.
                        </p>

                        <p>
                            The goal of the game is to "catch" the colored figures in the shortest possible time.
                            The peculiarity of this game is to create objects of random size and color.
                        </p>

                        <p>
                            Below the visual reproduction of the project:
                        </p>
                    </div>

                    <div className="project--image">
                        <img src={VideoGame} />
                        <p>
                            This is a capture of the <strong>Video Game</strong> just in one page.
                        </p>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}
