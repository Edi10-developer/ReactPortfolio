import React, { Component } from 'react';
import CalculatorItem from './../img/calculator.png'

export default class Calculator extends Component {
    render() {
        return (
            <div className="project" >
                <div className="project-body">
                    <div className="project--description">
                        <h2 className="section__title section__title--project">Calculator</h2>
                        <p>
                            This is a Calculator app developed with <strong>Vanilla JavaScript</strong>.
                    </p>

                        <p>

                        The design is creative, dynamic and easy to understand.
                   </p>
                        <p>
                            Below the visual reproduction of the project:
                    </p>
                    </div>
                    <div className="project--image">
                        <img src={CalculatorItem} />
                        <br/>
                    </div>
                   
                    <p>
                        Here is the <a href="https://github.com/Edi10-developer/Calculator---Vanilla-JavaScript"><strong>Link </strong></a>of the project code.
                    </p>
                </div>

            </div>
        )
    }
}
