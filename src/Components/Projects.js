import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Item1 from './img/item1.jpg';
import Item2 from './img/item2.jpg';
import Item3 from './img/item3.jpg';
import Item4 from './img/item4.jpg';
import Item5 from './img/item5.jpg';
import Item6 from './img/item6.jpg';
import Item7 from './img/item7.jpg';
import Item8 from './img/item8.jpg';
import Item9 from './img/item9.jpg';
import Item10 from './img/item10.jpg';
import Item11 from './img/item11.jpg';
import Item12 from './img/item12.jpg';

export default class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                  <h1 className="section__title section__title--project">Projects:</h1>
                     <div className="portfolio projects">
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

                    <div className="portfolio__img" >
                        {/*  Portfolio item 05 --> */}
                        <Link to='/barber-shop' className="portfolio__item">
                            <img src={Item5} alt="" alt="barber shop" className="portfolio__img--img" />
                        </Link>
                        <p className="porfolio--title">BarberShop - HTML</p>
                    </div>

                    <div className="portfolio__img" >
                        {/*  Portfolio item 06 --> */}
                        <Link to='/videogame' className="portfolio__item">
                            <img src={Item6} alt="" alt="videogame" className="portfolio__img--img" />
                        </Link>
                        <p className="porfolio--title">Videogame - JavaScript</p>
                    </div>

                    <div className="portfolio__img" >
                        {/*  Portfolio item 07 --> */}
                        <Link to='/covid-tracker' className="portfolio__item">
                            <img src={Item7} alt="" alt="videogame" className="portfolio__img--img" />
                        </Link>
                        <p className="porfolio--title">Covid-19 Tracker - React</p>
                    </div>

                    <div className="portfolio__img" >
                        {/*  Portfolio item 08 --> */}
                        <Link to='/portfolio-template' className="portfolio__item">
                            <img src={Item8} alt="" alt="videogame" className="portfolio__img--img" />
                        </Link>
                        <p className="porfolio--title">Portfolio - CSS3(Flexbox)</p>
                    </div>

                    <div className="portfolio__img" >
                        {/*  Portfolio item 09 --> */}
                        <Link to='/netflix-clone' className="portfolio__item">
                            <img src={Item9} alt="" alt="netflix-clone" className="portfolio__img--img" />
                        </Link>
                        <p className="porfolio--title">Netflix Clone - React</p>
                    </div>

                    <div className="portfolio__img" >
                        {/*  Portfolio item 10 --> */}
                        <Link to='/calculator' className="portfolio__item">
                            <img src={Item10} alt="" alt="calculator" className="portfolio__img--img" />
                        </Link>
                        <p className="porfolio--title">Calculator - Vanilla JS</p>
                    </div>

                    <div className="portfolio__img" >
                        {/*  Portfolio item 11 --> */}
                        <Link to='/recipeapp' className="portfolio__item">
                            <img src={Item11} alt="" alt="recipeapp" className="portfolio__img--img" />
                        </Link>
                        <p className="porfolio--title">RecipeApp - Vanilla JS</p>
                    </div>

                    <div className="portfolio__img" >
                        {/*  Portfolio item 12 --> */}
                        <Link to='/musicapp' className="portfolio__item">
                            <img src={Item12} alt="" alt="recipeapp" className="portfolio__img--img" />
                        </Link>
                        <p className="porfolio--title">Music App - Vanilla JS</p>
                    </div>

                    </div>
            </div>
        )
    }
}
