import React, { Component } from 'react';

import RecipeAppItem from './../img/recipeAppItem.png';
import RecipeAppItem2 from './../img/recipeAppItem2.png';
import RecipeAppItem3 from './../img/recipeAppItem3.png';

export default class RecipeApp extends Component {
    render() {
        return (
            <div className="project" >
                <div className="project-body">
                    <div className="project--description">
                        <h2 className="section__title section__title--project">Recipe App</h2>
                        <p>
                            This recipe app developed with <strong>Vanilla JavaScript</strong>.
                    </p>

                        <p>
                            The design is creative, dynamic and easy to understand.
                            Consume an API of a recipe site called <a href="https://www.edamam.com/">Edamam</a>
                        </p>
                        <p>
                            Below the visual reproduction of the project:
                    </p>
                    </div>

                    <div className="project--image">
                        <img src={RecipeAppItem} />
                        <p>
                            This is a representation of the <strong>search input</strong> for searching your recipe.
                    </p>
                        <br />
                    </div>

                    <div className="project--image">
                        <img src={RecipeAppItem2} />
                        <p>
                            This is a representation of the <strong>results</strong> of the searching.
                    </p>
                        <br />
                    </div>
                    <div className="project--image">
                        <img src={RecipeAppItem3} />
                        <p>
                            This is a representation of the <strong>results</strong> of the searching.
                    </p>
                        <br />
                    </div>

                    <p>
                        Here is the <a href="https://github.com/Edi10-developer/RecipeApp-VanillaJs"><strong>Link </strong></a>of the project code.
                    </p>
                </div>

            </div>
        )
    }
}
