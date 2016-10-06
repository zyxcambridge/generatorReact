import ReactDOM from 'react-dom';
import ZyxMain from './components/ZyxMain.js';
import SecondPage from './components/SecondPage.js';
import Home from './components/Home.js';
import './styles/RootIndex.css';

import React, { Component } from 'react';
import { Router, Route, browserHistory, Link } from 'react-router';


class AppBar extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="/ZyxMain" component={ZyxMain} />
        <Route path="/SecondPage" component={SecondPage} />
      </Router>
    );
  }
}

export default AppBar;


ReactDOM.render(<AppBar/>, document.getElementById('app'))



// Render the main component into the dom
// ReactDOM.render(<ZyxApp />, document.getElementById('app'));



// import React from 'react'
// import createBrowserHistory from 'history/lib/createBrowserHistory'
// import { Router, Route, IndexRoute } from 'react-router'
// import App from '../components/App'
// import Home from '../components/Home'
// import About from '../components/About'
// import Features from '../components/Features'

// React.render(
//   <Router history={createBrowserHistory()}>
//     <Route path='/' component={App}>
//       <IndexRoute component={Home} />
//       <Route path='about' component={About} />
//       <Route path='features' component={Features} />
//     </Route>
//   </Router>,
//   document.getElementById('app')
// )
