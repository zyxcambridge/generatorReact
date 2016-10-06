require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'

import Links from "./Links.js"



export default class SecondPage extends React.Component{

	constructor(props){
		super(props);
	
	}

	componentDidMount(){

	}

	render(){

		return(
			<section className="stage" ref = "stage">
				<section className="img-sec">			
					<h2>放大一张图片查看</h2>
					<div className = "test" onClick = {this.navNextPage}>
					<h5>切换到下一个页面</h5>
					<h5>放大一张图片查看</h5>
					<h5>切换到下一个页面</h5>
					<h5>放大一张图片查看</h5>
					</div>
				</section>

				<nav className="linksapp-nav">
				 <Links  />
				</nav>


			</section>

			);

	}

}
