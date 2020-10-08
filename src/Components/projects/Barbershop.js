import React, { Component } from 'react';

import Home1 from '../img/BarberShop/Home1.png';
import Home2 from '../img/BarberShop/Home2.png';
import Orario  from '../img/BarberShop/Orario.png';
import Prezzi from '../img/BarberShop/Prezzi.png';
import Photogallery from '../img/BarberShop/Photogallery.png';
import DoveSiamo from '../img/BarberShop/DoveSiamo.png';

export default class Barbershop extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="project" id="project">
                <div className="project-body">
                    <div className="project--description">
                        <h2 className="section__title section__title--project">Barber Shop Website</h2>
                        <p>
                            This is my first ever project, made in 2019 entirely in <strong>HTML</strong>.
                        </p>

                         <p>
                            It was made for my cousin's shop in Italy.
                       </p>
                       <p>
                            Below the visual reproduction of the project:
                        </p>
                    </div>
                    <div className="project--image">
                        <img src={Home1} />
                        <br />
                        <img src={Home2} />
                        <p>
                            This are captures of the <strong>Home</strong> page.
                        </p>
                        <br />
                    </div>

                    <div className="project--image">
                        <img src={Prezzi} />
                        <p>
                            This is a capture of the<strong> Prices</strong> page.
                        </p>
                        <br />
                    </div>

                    <div className="project--image">
                        <img src={Orario} />
                        <p>
                            This is a capture of the <strong>Opening hours</strong> page.
                        </p>
                        <br />
                    </div>

                    <div className="project--image">
                        <img src={Photogallery} />
                        <p>
                            This is a capture of the <strong>Photogallery</strong> page.
                        </p>
                        <br />
                    </div>

                    <div className="project--image">
                        <img src={DoveSiamo} />
                        <p>
                            This is a capture of the <strong>Location</strong> page.
                        </p>
                        <p>
                           Here is the <a href="https://github.com/Edi10-developer/Barber-Shop"><strong>Link </strong></a>of the project code.
                        </p>   
                    </div>

                </div>
            </div>
        )
    }
}
