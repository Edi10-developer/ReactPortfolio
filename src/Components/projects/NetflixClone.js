import React, { Component } from 'react';

// Images
import  Home from '../img/NetflixClone/Home.png';
import Signin from '../img/NetflixClone/Signin.png';
import Plan  from '../img/NetflixClone/Plans.png';
import PlanChoosed from '../img/NetflixClone/PlanChoosed.png';
import Devices from '../img/NetflixClone/Devices.png';


class NetflixClone extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="project" id="project">
                <div className="project-body">
                    <div className="project--description">
                        <h2 className="section__title section__title--project">Netflix Clone</h2>
                        <p>
                            This is an clone of the famous <strong>Netflix</strong> webpage created with <strong>React</strong>.
                    </p>

                        <p>
                            The particularity of this project is that I used for the first time the <strong>'styled components'</strong> that allow you to customize the elements directly on the page
                   </p>
                        <p>
                            Below the visual reproduction of the project:
                    </p>
                    </div>
                    <div className="project--image">
                       <img src={Home} />
                        <br />
                            This are captures of the <strong>Home Page</strong> of the site.
                        <br />
                        <br />
                    </div>
                    <div className="project--image">
                        <img src={Devices} />
                        <p>
                            You can choose the <strong>Device</strong> where to watch movies.
                    </p>
                        <br />
                    </div>
                    <div className="project--image">
                        <img src={Signin} />
                        <p>
                            This is a capture of the <strong>Sign In Page</strong>.
                    </p>
                        <br />
                    </div>
                    <div className="project--image">
                        <img src={Plan} />
                        <p>
                            This is the <strong>Price Page</strong> where you can choose your plan.
                    </p>
                        <br />
                    </div>
                    <div className="project--image">
                        <img src={PlanChoosed} />
                        <p>
                            This is a capture of the <strong>Plan Choosing</strong>.
                    </p>
                        <br />
                    </div>
                    

                    <p>
                        Here is the <a href="https://github.com/Edi10-developer/Netfilx-Clone---React"><strong>Link </strong></a>of the project code.
                    </p>
                </div>

            </div>
        )
    }
}

export default NetflixClone;
