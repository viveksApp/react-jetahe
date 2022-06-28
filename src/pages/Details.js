import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Details extends Component {
  componentDidMount() {
    this.props.stopLoading();
  }

  render() {
    return (
      <>
        <Helmet>
          ‍<title>About Us</title>
        </Helmet>
        <h1>Loading database...dsfsdfsdf</h1>
        <div className="row">
          <div className="col-md-4">
            <p>This is first Column</p>
          </div>
          <div className="col-md-4" />
          <div className="col-md-4" />
        </div>
      </>
    );
  }
}

export default Details;
