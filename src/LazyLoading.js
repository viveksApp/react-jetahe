import React, { lazy, Suspense } from 'react';

const Lazyloading = (importFunc, { fallback = null }) => {
  const LazyComponent = lazy(importFunc);
  return props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

Lazyloading.defaultProps = {
  fallback: null
};

export default Lazyloading;

/*import React, { Component } from 'react';
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

//const [progressB] = useState();

class App extends React.Component {
 

  state = {
    progress: 0
  };

  componentDidMount() {
    let counter = 1;
   const interval = setInterval(() => {
      counter = counter + Math.floor(Math.random() * 10) + 1;
      this.setState({
        progress: counter
      });
      if (counter == 100) {
        clearInterval(interval);
      }
    }, 300); 
  }

  render() {
    return (
      <>
        <Router history={history}>
          <Navbar />
          <LoadingBar color="#f11946" progress={this.state.progress} />
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

 
 */
