import React, { Component, useRef } from 'react';
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

const Loader = () => {
  /*
  state = {
    loadingBarProgress: 20
  };

  handleClick = () => {
    this.setState({ loadingBarProgress: 70 });
  };

  componentDidMount() {
    setInterval(() => {
      this.handleClick();
    }, 3000);
  }
  */
  useEffect(() => {
    ref.current.continuousStart();
  }, []);

  const ref = useRef(null);

  return (
    <>
      <Router>
        <LoadingBar ref={ref} height={2} color="red" />

        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </Router>
    </>
  );
};

export default Loader;

//https://stackoverflow.com/questions/53945763/componentdidmount-equivalent-on-a-react-function-hooks-component

//https://codepen.io/vivekst/pen/KKmKwaz :: Use

//https://academind.com/tutorials/reactjs-pagination/

//https://www.npmjs.com/package/react-top-loading-bar/v/1.0.7
