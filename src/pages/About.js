import React, { Component } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import Details from './pages/Details';

var ProgressBar = window.ReactProgressBarPlus;

class About extends React.Component {
  componentDidMount() {
    //this.props.stopLoading();

    axios({
      url: 'https://jsonplaceholder.typicode.com/posts',
      delay: 30000, // Post executation delay
    }).then((response) => {
      this.setState({
        isLoaded: true,
        items: response.data,
        pageTitle: 'Welcome Here',
      });
      console.log(response.data);
      this.props.stopLoading();
    });
  }

  render() {
    return (
      <>
        <Helmet>
          ‍ ‍<title>Datatable</title>
        </Helmet>
        <br />
        <p>This is about us</p>
      </>
    );
  }
}

export default About;
