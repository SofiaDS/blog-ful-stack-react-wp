import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
        <div className="container-fluid">
            <img></img>
            <h3>
                Hi Hi im the header
            </h3>
            <nav>
              <span>
                <a href="#">Home</a>
              </span>
              <span>
                <a href="#"> Us</a>
              </span>
              <span>
                <a href="#"> React</a>
              </span>
              <span>
                <a href="#"> WordPress</a>
              </span>
            </nav>
        </div>
        ) 
        
    }
}