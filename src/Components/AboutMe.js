import React, { Component } from 'react';
import Cravatta from './img/cravatta2.jpg';
import HardSkills from './img/meta-chart.png';
import SoftSkills from './img/softskills.png';

export default class AboutMe extends Component {
    render() {
        return (
            <div className="about-me" id="about">
                <h2 className="section__title section__title--about">Who I am</h2>
                <img src={Cravatta} alt="Edi" className="about-me__img" />
                <p className="section__subtitle section__subtitle--about">Front-end developer based in Barcelona</p>
                <div className="about-me__body">
                    <p>I am Edi, <br />
 a Junior Front-End Developer who is transforming his creativity into a job.
By speaking 4 different languages ​​I developed communication skills that differentiate me from the crowd.
Having held positions of responsibility in the past I have developed a mentality capable of working for objectives by solving problems along the way.
                </p>
                    <div id="skills_div">
                        <img src={HardSkills} />
                        <img src={SoftSkills} />
                    </div>
                </div>
            </div>
        )
    }
}
