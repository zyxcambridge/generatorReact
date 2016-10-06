require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'




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
				zhangyixin secondpage
				</section>
				<nav className="controller-nav">
				 daoru
				</nav>
			</section>

			);

	}

}
