import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active ">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link active">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/details" className="nav-link active">
                  Details
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/maza" className="nav-link active">
                  Maza
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;

/*https://codesandbox.io/s/react-loading-forked-cj9pc?file=/src/App.js:562-770

 <Link
                  to="/details"
                  className="nav-link active"
                  onClick={() => this.props.startLoading()}
                >
                  Details
                </Link>
*/

//https://www.codegrepper.com/code-examples/javascript/react+get+data+from+url
//https://github.com/nickstanish/reprogressbars/blob/master/src/components/ProgressProvider.js
//https://github.com/abdennour/react-progressbar/blob/master/demo/browser.js
//https://github.com/lwansbrough/react-native-progress-bar
//https://stackoverflow.com/questions/64543686/react-change-width-of-progress-bar-from-state
//https://stackblitz.com/edit/react-custom-progress-bar?file=src%2FProgressBar.js
//https://www.geeksforgeeks.org/how-to-create-a-custom-progress-bar-component-in-react-js/
//https://learnersbucket.com/examples/react/create-progress-bar-in-react/
//https://elements.envato.com/web-templates/reactjs :: free
//https://github.com/codegeous/react-component-depot
