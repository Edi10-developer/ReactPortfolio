import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <div className="my-services" id="services">
                <h2 className="section__title section__title--services">What I do</h2>
                <div className="services">
                    <div className="services">
                        <h3 className="section__subtitle--services">Design and Development</h3>
                        <p>
                            I design and develop a website based on the needs of each client.
                            The latter can choose the template, the colors, the fonts and all that it requires.
                            Each website before development will have a market research to understand which are the best options to adopt according to the specific sector of the company.
                </p>
                    </div>
                    <div id="heart"></div>
                    <div classNameName="services">
                        <h3 className="section__subtitle--services" >Website Translation </h3>
                        <p>
                            Once your site has been created, it can be translated into various languages.
                            My specialization are:
                            English, Spanish and Italian.
                            The possibility of translating an existing website is also offered.
                            This offers the possibility of expanding its market to more countries.
                </p>
                <br/><br/>
                    </div>

                    <div classNameName="services">
                        <h3 className="section__subtitle--services">Online Web Support</h3>
                        <p>
                            Once you have created your site, you will have total access to all the services it offers.
                            A service offered and online support through email.
                            If you consider a structural or style change necessary, it is always possible to make it.
                            At the bottom of the page you will find my contacts.
                </p>
                </div>
                <a className="btn" href="#work">My Work</a>
                </div>

            </div>
        )
    }
}
