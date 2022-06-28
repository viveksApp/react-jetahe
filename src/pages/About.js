import React, { Component } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import Details from './pages/Details';

var ProgressBar = window.ReactProgressBarPlus;

class About extends React.Component {
  componentDidMount() {
    this.props.stopLoading();
  }

  render() {
    return (
      <>
        <Helmet>
          ‍<title />
        </Helmet>
        <br />
        <p>This is about us</p>
      </>
    );
  }
}

export default About;
