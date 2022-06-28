import React, { Component, useEffect } from 'react';
import axios from 'axios';
import Progress from 'react-progress-2';
import crossdomain from 'crossdomain';

class Login extends Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }

  componentDidMount() {
    this.props.stopLoading();
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  doLogin() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Email
    if (!fields['email']) {
      formIsValid = false;
      errors['email'] = ' Enter email id';
      //alert('Hi! Admin');
    }

    if (typeof fields['email'] !== 'undefined') {
      let lastAtPos = fields['email'].lastIndexOf('@');
      let lastDotPos = fields['email'].lastIndexOf('.');

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields['email'].indexOf('@@') == -1 &&
          lastDotPos > 2 &&
          fields['email'].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors['email'] = 'Email is not valid';
      }
    }

    if (!fields['password']) {
      formIsValid = false;
      errors['password'] = 'Enter Password';
    }

    if (typeof fields['password'] !== 'undefined') {
      if (!fields['password'].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors['password'] = 'Only letters & numbers';
      }
    }

    this.setState({ errors: errors });

    if (formIsValid) {
      /*---------------------------*/
      let formData = new FormData();
      let lName = fields['email'];
      let lPass = fields['password'];
      formData.append('email', lName);
      formData.append('password', lPass);
      formData.append('userDeviceToken', 'ASDSfsdf343');
      /*---------------------------*/

      axios({
        method: 'post',
        url: 'https://bodhimatri.com/bodhiApp/login.php',
        data: formData,
        crossdomain: true,
        config: {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      })
        .then(function (response) {
          //handle success
          console.log(response);
          console.log(response.data.userInfo.profId);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
    }

    return formIsValid;
  }

  render() {
    return (
      <div className="global-container">
        <div className="card login-form">
          <div className="card-body">
            <h3 className="card-title text-center">Log</h3>
            <div className="card-text">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  className="form-control form-control-sm"
                  refs="email"
                  type="text"
                  size="30"
                  placeholder="Email"
                  onChange={this.handleChange.bind(this, 'email')}
                  value={this.state.fields['email']}
                />
                <span className="error errorclassName">
                  {this.state.errors['email']}
                </span>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  className="form-control form-control-sm"
                  refs="password"
                  type="Password"
                  size="100"
                  placeholder="Password"
                  onChange={this.handleChange.bind(this, 'password')}
                  value={this.state.fields['password']}
                />
                <span className="error errorclassName">
                  {this.state.errors['password']}
                </span>
              </div>

              <button
                className="btn btn-primary btn-block"
                onClick={() => {
                  this.doLogin();
                }}
              >
                Click me!
              </button>

              <div className="sign-up">
                Don't have an account? <a href="#">Create One</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
