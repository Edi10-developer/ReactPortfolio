import React, { Component } from 'react';

import BlogInicio from '../img/Blog/Blog-Inicio.png';
import BlogBlog from '../img/Blog/Blog-Blog.png';
import BlogFormulario from '../img/Blog/Blog-Formulario.png';
import BlogArticulo from '../img/Blog/Blog-Articulo.png';
import BlogCrearArticulo from '../img/Blog/Blog-CrearArticulo.png';
import { Link } from 'react-router-dom';

export default class ProjectBlog extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="project" id="project">
                <div className="project-body">
                    <div className="project--description">
                        <h2 className="section__title section__title--project">Blog Post</h2>
                        <p>
                            This project was developed during a <strong>React </strong>course with Victor Robles.
                            It is an app to manage a blog.
                            It is possible to write, update, delete articles in record time.
                </p>
                        <p>
                            It was developed in 3 phases: the construction of the visual part (HTML, CSS, JavaScript),
                            the construction of the Backend and the construction of the App React.
                </p>
                        <p>
                            Below are photos of the reproduction of the app:
                </p>
                    </div>
                    <div className="project--image">
                        <img src={BlogInicio} />
                        <p>
                            This is a capture of the <strong>Home</strong> page.
                        </p>
                        <br />
                    </div>

                    <div className="project--image">
                        <img src={BlogBlog} />
                        <p>
                            This is a capture of the<strong> Blog</strong> page.
                        </p>
                        <br />
                    </div>

                    <div className="project--image">
                        <img src={BlogFormulario} />
                        <p>
                            This is a capture of the <strong>Subscription</strong> page.
                        </p>
                        <br />
                    </div>

                    <div className="project--image">
                        <img src={BlogCrearArticulo} />
                        <p>
                            This is a capture of the <strong>Create New Article</strong> page.
                        </p>
                        <br />
                    </div>

                    <div className="project--image">
                        <img src={BlogArticulo} />
                        <p>
                            This is a capture of the <strong>Article</strong> page.
                        </p>
                        <br />
                        <p>
                            Here is the <a href="https://github.com/Edi10-developer/Proyecto-React"><strong>Link </strong></a>of the project code.
                        </p>
                        <p>
                            
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}
