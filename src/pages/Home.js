import React, { Component } from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import Details from './pages/Details';
//https://reactjsexample.com/customizable-shimmer-effects-for-react/
import Shimmer from 'react-js-loading-shimmer'; //https://snyk.io/advisor/npm-package/react-js-loading-shimmer
/* <Image
src={url.format(1149137)}
width={220} height={160}
style={{ objectFit: 'cover' }}
/>*/
import { ShimmerPostList } from 'react-shimmer-effects';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      pageTitle: '',
    };
  }

  componentDidMount() {
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

  render() {
    const { items } = this.state;
    const isLoaded = this.state.isLoaded;
    const pageTitle = this.state.pageTitle;

    if (!isLoaded) {
      return (
        <>
          <div>
            Loading ...
            <ShimmerPostList postStyle="STYLE_FOUR" col={2} row={4} gap={30} />;
          </div>
        </>
      );
    } else {
      return (
        <>
          <Helmet>
            ‍<title>{pageTitle}</title>
          </Helmet>

          <div className="container">
            <div className="row">
              {items.map((item) => (
                <li className="card mb-2 col-md-3 m-2">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <a className="nav-link" href={`/details/${item.id}`}>
                    {item.title}
                  </a>
                </li>
              ))}
            </div>
          </div>

          <div className="thereIsSomething">
            <div className="noSomeThing">
              <table className="table">
                <thead>
                  <tr>
                    <th>Sr.No.</th>
                    <th>Test Case</th>
                    <th>Status</th>
                    <th>Need Rebuild?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>1</tr>
                  <tr>Config Build</tr>
                  <tr>Done</tr>
                  <tr>Negative</tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Home;
//https://www.codegrepper.com/code-examples/javascript/react+get+data+from+url
//https://www.digitalocean.com/community/tutorials/react-axios-react
