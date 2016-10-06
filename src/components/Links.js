import '../styles/RootIndex.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import TopNavBar from "./TopNavBar.js"


const Links = () =>
  <nav  >
    <Link className="homebar" activeClassName="active" to="/">主界面</Link>
    <Link className="zyxmainbar" activeClassName="active" to="/ZyxMain"> <span>照片墙</span>  </Link>
    <Link className="secondpagebar" activeClassName="active" to="/SecondPage"><span>SecondPage</span> </Link>
  </nav>

export default Links;