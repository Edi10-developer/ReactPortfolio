import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Item1 from './img/item1.jpg';
import Item2 from './img/item2.jpg';
import Item3 from './img/item3.jpg';
import Item4 from './img/item4.jpg';

export default class Works extends Component {

    render() {
        return (


            <div className="my-work" id="work">
                <h2 className="section__title section__title--work">My work</h2>
                <p className="section__subtitle section__subtitle--work">A selection of my projects</p>
                <p>Below is a list of the projects I made with the related links to the various project descriptions.
                They were mainly developed in JavaScript.
                The framework in which I am specializing and React even if I am willing to learn any technology necessary to carry out a project.
        </p>

                <div className="portfolio">
                    <div className="portfolio__img" >
                        {/*  Portfolio item 01 --> */}

                        <Link to='/project-blog' className="portfolio__item">
                            <img src={Item1} alt="" alt="blog" className="portfolio__img--img" />
                        </Link>
                        <p className="porfolio--title">Blog App - React</p>

                    </div>

                    <div className="portfolio__img" id="portfolio__img--1" >
                        {/*  Portfolio item 02 --> */}
                        <Link to='/todoapp' className="portfolio__item">
                            <img src={Item2} alt="" alt="todoapp" className="portfolio__img--img" />
                        </Link>
                        <p className="porfolio--title">ToDo App - React</p>
                    </div>

                    <div className="portfolio__img" >
                        {/*  Portfolio item 03 --> */}
                        <Link to='/clock' className="portfolio__item">
                            <img src={Item3} alt="" alt="canvas clock" className="portfolio__img--img" />
                        </Link>
                        <p className="porfolio--title">Clock - Canvas</p>
                    </div>

                    <div className="portfolio__img" >
                        {/*  Portfolio item 04 --> */}
                        <Link to='/codeplayer' className="portfolio__item">
                            <img src={Item4} alt="" alt="codeplayer" className="portfolio__img--img" />
                        </Link>
                        <p className="porfolio--title">Code Player - JQuery</p>
                    </div>
                    </div>
                <Link to='/projects' className="portfolio__item">
                <a className="btn" onClick="showMoreProjects()">See All Projects...</a>
                </Link>
                </div>
        );
    }

}
