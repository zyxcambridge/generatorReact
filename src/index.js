import ReactDOM from 'react-dom';
import ZyxMain from './components/ZyxMain.js';

import SecondPage from './components/SecondPage.js';


    import React, { Component } from 'react';
    import { Router, Route, browserHistory, Link } from 'react-router';
    
    // require('styles/App.scss');

    import './styles/RootIndex.css';
    
    const Home = () => <div><h1>Home</h1><Links /></div>;
    const About = () => <div><h1>About</h1><Links /></div>;
    const Contact = () => <div><h1>Contact</h1><Links /></div>;
    
    const Links = () =>
      <nav  >
        <Link className="homebar" activeClassName="active" to="/">Home</Link>
        <Link className="zyxmainbar" activeClassName="active" to="/ZyxMain">ZyxMain</Link>
        <Link className="secondpagebar" activeClassName="active" to="/SecondPage">SecondPage</Link>
      </nav>
    
    class App extends Component {
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
    
    export default App;






// ReactDOM.render(<ZyxApp />, document.getElementById('app'));
ReactDOM.render(<App/>, document.getElementById('app'))



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
