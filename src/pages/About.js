import React, { Component } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import Details from './pages/Details';

var ProgressBar = window.ReactProgressBarPlus;

const $ = require('jquery');
require('datatables.net')(window, $);

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

      this.props.stopLoading();
    });
  }

  //option 1
  async getUsersData() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(res.data);
    this.setState({ loading: false, users: res.data });
  }

  componentDidMount() {
    this.getUsersData().then(() => this.sync());
  }

  sync() {
    this.$el = $(this.el);
    this.$el.DataTable({
      data: this.state.users, //option 1
      // data: this.getUsersData1(), //option 2
      columns: [
        { title: 'Name', data: 'name' },
        { title: 'Username', data: 'username' },
        { title: 'Email', data: 'email' },
        { title: 'Phone', data: 'phone' },
        { title: 'Website', data: 'website' },
      ],
    });
  }

  render() {
    return (
      <>
        <Helmet>
          ‍ ‍<title>Datatable</title>
        </Helmet>
        <br />
        <table
          className="display table"
          width="100%"
          ref={(el) => (this.el = el)}
        ></table>
      </>
    );
  }
}

export default About;
