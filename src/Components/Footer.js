import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a href="mailto:selimi.edi.1991@gmail.com" className="footer__link">selimi.edi.1991@gmail.com</a>
                <ul className="social__link">
                    <li className="social-list__item">
                        <a href="https://www.linkedin.com/in/edi-selimi-856671173/"
                            className="social-list__link">Linkedin </a>
                    </li>
                    <li className="social-list__item">
                        <a href="https://github.com/Edi10-developer" className="social-list__link"><i className="fab fa-github"></i>GitHub</a>
                    </li>
                    <li className="social-list__item">
                        <a className="social-list__link">Twitter</a>
                    </li>
                </ul>
                <p>Designed and developed by <a href="https://www.linkedin.com/in/edi-selimi-856671173/?locale=es_ES">Edi Selimi</a>&copy; - 2020</p>
            </div>
        );
    }
}
