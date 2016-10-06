require('normalize.css/normalize.css');
// require('styles/ZyxApp.scss');
require('styles/App.scss');

import React from 'react';


// 图片 组件
var ImgFigure = React.createClass({

	handleClick:function(e){

		if (this.props.arrange.isCenter){

			this.props.inverse();
		}
		else{
			this.props.center();
		};

		e.preventDefault();
		e.stopPropagation();
	},

	navNextPage:function(e){

		console.log('切换到下一个页面');
		e.preventDefault();
		e.stopPropagation();
	},

	render:function(){

		var styleObj ={};

		if (this.props.arrange.pos){
			styleObj = this.props.arrange.pos;
		};

		if (this.props.arrange.rotate){
      		styleObj['transform'] = 'rotate(' +this.props.arrange.rotate +'deg)';
		};

		if (this.props.arrange.isCenter){
			styleObj.zIndex = 11;
		};

		var imgFigureClassName = 'img-figure';
    	imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse':'';

		return(
			<figure className = {imgFigureClassName} style = {styleObj} onClick={this.handleClick}>
				<img onClick = {this.handleClick} src = {this.props.data.imageURL} alt = {this.props.data.title} />
				<hr />
	
				<figcaption>
					<h2 className = "img-title"> {this.props.data.title}</h2>
					<div className = "img-back" onClick = {this.handleClick}>
						<p>{this.props.data.desc}</p>
					</div>
				</figcaption>
			</figure>
			);
	}

});
export default ImgFigure;