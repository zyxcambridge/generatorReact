import '../styles/RootIndex.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import TopNavBar from "./TopNavBar.js"


const Links = () =>
  <nav  >
    <Link className="homebar" activeClassName="active" to="/">Home</Link>
    <Link className="zyxmainbar" activeClassName="active" to="/ZyxMain">   ZyxMain1    </Link>
    <Link className="secondpagebar" activeClassName="active" to="/SecondPage">SecondPage</Link>
  </nav>

export default Links;