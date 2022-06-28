import React, { Component, useState, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import Navbar from './components/Navbar';
//import LoadingBar from "react-top-loading-bar";
import Helmet from 'react-helmet';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Details from './pages/Details';
import LoadingBar from 'react-top-loading-bar';

class App extends Component {
  constructor(props) {
    super(props);

    let ref = null;
  }

  componentDidMount() {
    ref.current.continuousStart();
  }

  /*constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setInterval(() => {}, 3000);
  }*/

  /*state = {
    progress: 0
  };

  componentDidMount() {
    let counter = 1;
    const interval = setInterval(() => {
      counter = counter + Math.floor(Math.random() * 10) + 1;
      this.setState({
        progress: counter
      });
      if (counter == 85) {
        clearInterval(interval);
      }
    }, 300);
  }*/

  render() {
    return (
      <>
        <Router history={history}>
          <Navbar />
          <LoadingBar color="#f11946" progress={30} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/details/:id" component={Details} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;

/*
function App() {
  return <div className="App">dsd</div>;
}

export default App; */
//https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/
//https://karoldabrowski.com/blog/getting-parameters-from-url-in-a-react-application/
//https://react-bootstrap.github.io/components/navbar/
//https://makitweb.com/jquery-search-text-in-the-element-with-contains-selector/ // search

/*
https://reposhub.com/react/miscellaneous/klendi-react-top-loading-bar.html
*/
