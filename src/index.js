import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <App />
   
  </React.StrictMode>,
  document.getElementById('root')
);

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
navToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        document.body.classList.remove('nav-open');
    });

});

