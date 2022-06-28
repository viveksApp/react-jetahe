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
import Maza from './pages/Maza';
import LoadingBar from 'react-top-loading-bar';
import GA4React from 'ga-4-react';

const App = () => {
  const ref = useRef(null);
  const ga4react = new GA4React('G-XXXXXXXXXX');
  ga4react.initialize();

  return (
    <>
      <Router history={history}>
        <Navbar
          startLoading={() => {
            ref.current.continuousStart();
          }}
        />
        <LoadingBar color="#f11946" ref={ref} />
        <Switch>
          <Route exact path="/">
            <Home
              stopLoading={() => {
                ref.current.complete();
              }}
            />
          </Route>

          <Route exact path="/about">
            <About
              stopLoading={() => {
                ref.current.complete();
              }}
            />
          </Route>

          <Route exact path="/login">
            <Login
              stopLoading={() => {
                ref.current.complete();
              }}
            />
          </Route>

          <Route path="/details/:id">
            <Details
              stopLoading={() => {
                ref.current.complete();
              }}
            />
          </Route>

          <Route exact path="/maza">
            <Maza
              stopLoading={() => {
                ref.current.complete();
              }}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//https://www.codegrepper.com/code-examples/javascript/routes+in+react+not+loading+page
//https://stackoverflow.com/questions/34607841/react-router-nav-bar-example
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

//https://stackoverflow.com/questions/64623059/google-analytics-4-with-react
//<Route path="/details/:id" component={Details} />
//https://codesandbox.io/s/react-loading-forked-cj9pc?file=/src/styles.css
