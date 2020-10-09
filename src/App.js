import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';

import Projects from './Components/Projects';

import ProjectBlog from './Components/projects/ProjectBlog';
import ToDoApp from './Components/projects/ToDoApp';
import Clock from './Components/projects/Clock';
import CodePlayer from './Components/projects/CodePlayer';
import Barbershop from './Components/projects/Barbershop';
import VideoGame from './Components/projects/Videogame';
import CovidTracker from './Components/projects/CovidTracker';
import PortfolioTemplate from './Components/projects/PortfolioTemplate';
import NetflixClone from './Components/projects/NetflixClone';
import Calculator from './Components/projects/Calculator';
import RecipeApp from './Components/projects/RecipeApp';
import MusicApp from './Components/projects/MusicApp';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Header />
      <Switch>
        
      <Route exact path='/' component={ Content } />
      <Route path='/project-blog' component={ ProjectBlog } />
      <Route path='/projects' component={ Projects } />
      <Route path='/todoapp' component={ ToDoApp } />
      <Route path='/clock' component={ Clock } />
      <Route path='/codeplayer' component={ CodePlayer } />
      <Route path='/barber-shop' component={ Barbershop } />
      <Route path='/videogame' component={ VideoGame } />
      <Route path='/covid-tracker' component={ CovidTracker } />
      <Route path='/portfolio-template' component={ PortfolioTemplate } />
      <Route path='/netflix-clone' component={ NetflixClone } />
      <Route path='/calculator' component={ Calculator } />
      <Route path='/recipeapp' component={ RecipeApp } />
      <Route path='/musicapp' component={ MusicApp } />

      </Switch>
     
     { /*
      <Introduction />
      <br />
      <Services />
      <br />
      <AboutMe />
      <br />

      <Works />
     */ }
      

      <Footer />
      </BrowserRouter>

    </div>

  );
}

export default App;
