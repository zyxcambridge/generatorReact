import '../styles/RootIndex.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';
import TopNavBar from "./TopNavBar.js"
import Links from "./Links.js"

const splashImg = require('../images/ui/general/bg_01.png');

const Home = () => (


<div>
<h1>Home</h1>

<div id="headerContent">
  <img src = {splashImg}
  alt="背景图"/>

  <p>我们非常重视你提交的每一项功能建议，让我们一起把网站建设得更好！</p>

</div>

<nav className="navbarzyx">
 <Links  />
</nav>

</div>


)

export default Home;