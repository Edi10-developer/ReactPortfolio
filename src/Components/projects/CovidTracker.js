import React, { Component } from 'react';

import Covid from '../img/Covid19/Covid.png';
import Covid2 from '../img/Covid19/covid2.png';
import Covid3 from '../img/Covid19/covid3.png';

export default class CovidTracker extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="project" id="project">
                <div className="project-body">
                    <div className="project--description">
                        <h2 className="section__title section__title--project">COVID-19 Tracker</h2>
                        <p>
                            This is an app developed with <strong>React</strong> to keep track of infections from Corona Virus.
                    </p>

                        <p>

                            It was created in April 2020 in the middle of the quarantine.
                            It is an app continuously updated thanks to an API connected to the website www.covid19.mathdro.id which deals with the global health situation.
                   </p>
                        <p>
                            Below the visual reproduction of the project:
                    </p>
                    </div>
                    <div className="project--image">
                        <img src={Covid} />
                        <br/>
                            This are captures of the <strong>Global</strong> situation.
                        <br />
                        <br />
                    </div>
                    <div className="project--image">
                        <img src={Covid2} />
                        <p>
                            This is a representation of the <strong>current state</strong> of a selected country.
                    </p>
                        <br />
                    </div>
                    <div className="project--image">
                        <img src={Covid3} />
                        <p>
                            This is a capture of the <strong>Country's</strong> situation.
                    </p>
                        <br />
                    </div>

                    <p>
                        Here is the <a href="https://github.com/Edi10-developer/COVID-19-Tracker"><strong>Link </strong></a>of the project code.
                    </p>
                </div>

            </div>
        )
    }
}
