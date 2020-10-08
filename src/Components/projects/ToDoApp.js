import React, { Component } from 'react';
import Todoapp from '../img/Todoapp/Todoapp.png';


export default class ToDoApp extends Component {

    componentDidMount(){
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="project" id="project">
                <div className="project-body">
                    <div className="project--description">
                        <h2 className="section__title section__title--project">To Do App</h2>
                        <p>
                            This project was developed with <strong>React </strong>.
                        It is an app to manage tasks.
                        It is possible to write, update, delete tasks in record time.
                        </p>

                        <p>
                        It is a simple app created for taree management or shopping list within everyone's reach and easy to use. App React.
                        </p>

                        <p>
                            Below the visual reproduction of the project:
                        </p>
                    </div>

                    <div className="project--image">
                        <img src={Todoapp} />
                        <p>
                            This is a capture of the <strong>App</strong> just in one page.
                        </p>
                        <br />
                        </div>

                        <p>
                        Here is the <a href="https://github.com/Edi10-developer/ToDo-App"><strong>Link </strong></a>of the project code.
                        </p>

                </div>
            </div>

        );
    }
}
