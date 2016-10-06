require('normalize.css/normalize.css');
// require('styles/ZyxApp.scss');
require('styles/App.scss');

// 不使用 ES6 的转译器
var ReactRouter = require('react-router')
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Link = ReactRouter.Link

import React from 'react';
import ReactDOM from 'react-dom';
import ControllerUnit from './ControllerUnit.js';
import ImgFigure from './ImgFigure.js';
import Links from "./Links.js"

//图片数据，从json文件读取
let imageDatas  = require('../data/imgData.json');

imageDatas = (function getImageURL (imageDataArr) {
    for(var i =0, j= imageDataArr.length;i<j;i++){
      var singleImageData= imageDataArr[i];
      singleImageData.imageURL = require('../images/pic'+ singleImageData.fileName);
      imageDataArr[i]  = singleImageData;
    }
    return imageDataArr;

})(imageDatas);

function getRangeRandom(Min,Max) {
  var Range = Max - Min;
  var Rand = Math.random();
  return (Min + Math.round(Rand * Range));
}
/*获取0-30°之间的任意的正负值*/
function get30DegRandom() {
  return (Math.random()> 0.5 ?'':'-')+ Math.ceil(Math.random()*30);
}


export default class ZyxAppComponent extends React.Component{

	constructor(props){
		super(props);
	    this.state ={
	      imgsArrangeArr:[
	        {
	          pos:{
	            left:0,
	            top:0
	          },
	          rotate:0,
	          isInverse:false,
	          isCenter:false
	        }
	      ]
	    };

	    this.Constant= {
	        centerPos:{   // 中心的图片的 位置
	          left:0,
	          right:0
	        },
	        hPosRange:{  //水平方向的取值范围
	          leftSecX:[0,0],
	          rightSecX:[0,0],
	          y:[0,0]
	        },
	        vPosRange:{  // 垂直方向的取值范围
	          x:[0,0],
	          topY:[0,0]
	        }
	      }

	}

	center(index){
		return function(){
			this.rearrange(index);

		}.bind(this);
	}

	rearrange(centerIndex){

		let imgsArrangeArr = this.state.imgsArrangeArr,

		Constant = this.Constant,
		centerPos = Constant.centerPos,
		hPosRange = Constant.hPosRange,
		vPosRange = Constant.vPosRange,
		hPosRangeLeftSecX = hPosRange.leftSecX,
		hPosRangeRightSecX = hPosRange.rightSecX,
		hPosRangeY = hPosRange.y,
		vPosRangeTopY = vPosRange.topY,
		vPosRangeX = vPosRange.x,

		imgsArrangeTopArr = [],
		topImgNum = Math.floor(Math.random()*2),
		topImgSpliceIndex =0,
		

	    imgsArrangeCenterArr = imgsArrangeArr.splice(centerIndex,1);
	    imgsArrangeCenterArr[0].pos = centerPos;
	    imgsArrangeCenterArr[0].rotate = 0;
	    imgsArrangeCenterArr[0].isCenter = true;

	    topImgSpliceIndex = Math.ceil(Math.random()*(imgsArrangeArr.length - topImgNum));
	    imgsArrangeTopArr  = imgsArrangeArr.splice(topImgSpliceIndex,topImgNum);

	    imgsArrangeTopArr.forEach(function(value,index){
	      imgsArrangeTopArr[index]={
	        pos:{
	          top:getRangeRandom(vPosRangeTopY[0],vPosRangeTopY[1]),
	          left:getRangeRandom(vPosRangeX[0],vPosRangeX[1])
	        },
	        rotate:get30DegRandom(),
	        isCenter:false
	      }
	    });

	    for(var i =0,j = imgsArrangeArr.length,k = j/2;i<j;i++){
	      var hPosRangeLORX = null;
	      if(i < k){
	        hPosRangeLORX = hPosRangeLeftSecX;
	      }else{
	        hPosRangeLORX = hPosRangeRightSecX;
	      }

	      imgsArrangeArr[i]={
	        pos:{
	          top:getRangeRandom(hPosRangeY[0],hPosRangeY[1]),
	            left:getRangeRandom(hPosRangeLORX[0],hPosRangeLORX[1])
	        },
	        rotate:get30DegRandom(),
	        isCenter:false
	      }

	    }

	    if(imgsArrangeTopArr && imgsArrangeTopArr[0]){
	      imgsArrangeArr.splice(topImgSpliceIndex,0,imgsArrangeTopArr[0]);
	    }

	    imgsArrangeArr.splice(centerIndex, 0, imgsArrangeCenterArr[0]);

	    this.setState({
	      imgsArrangeArr:imgsArrangeArr
	    });

	}

	inverse(index){

	    return function(){

	      var imgsArrangeArr = this.state.imgsArrangeArr;
	      imgsArrangeArr[index].isInverse  = ! imgsArrangeArr[index].isInverse;
	      this.setState({
	        imgsArrangeArr:imgsArrangeArr
	      });

	    }.bind(this);
		
	}

	componentDidMount(){
		// 组件加载后 ，为每个图片 计算 位置的范围
		var stageDom = ReactDOM.findDOMNode(this.refs.stage),
		stageW = stageDom.scrollWidth,
		stageH = stageDom.scrollHeight,
		// 屏幕 宽高的一半
		halfStageW = Math.ceil(stageW / 2),
		halfStageH = Math.ceil(stageH / 2);
		// 获取到 image 的大小
		var imgFigureDom = ReactDOM.findDOMNode(this.refs.imgFigure0),
		imgW  =imgFigureDom.scrollWidth,
		imgH = imgFigureDom.scrollHeight,
		halfImgW = Math.ceil(imgW / 2),
		halfImgH = Math.ceil( imgH/2);

		// 中心图片的位置
	    this.Constant.centerPos = {
	      left:halfStageW - halfImgW,
	      top:halfStageH - halfImgH
	    };

		// 左侧 图片区域  X 的取值范围
	    this.Constant.hPosRange.leftSecX[0] = -halfImgH;
	    this.Constant.hPosRange.leftSecX[1] = halfStageW - halfImgW*3;
	    // 右侧 区域  X 的取值范围
	    this.Constant.hPosRange.rightSecX[0]= halfStageW + halfImgW;
	    this.Constant.hPosRange.rightSecX[1] =stageW - halfImgW;
	    // 左右侧 Y值的取值范围
	    this.Constant.hPosRange.y[0] = -halfImgH;
	    this.Constant.hPosRange.y[1] = stageH- halfImgH;
		
		// 上侧区域 Y值的取值范围
	    this.Constant.vPosRange.topY[0] = -halfImgH;
	    this.Constant.vPosRange.topY[1] = halfStageH - halfImgH*3;
		// 上侧区域 X值的取值范围
	    this.Constant.vPosRange.x[0] = halfStageW -imgW;
	    this.Constant.vPosRange.x[1] = halfStageW;

	    this.rearrange(0);

	}

	render(){

		var controllerUnits = [],imgFigures = [];

		imageDatas.forEach(function(value,idx){

			if (!this.state.imgsArrangeArr[idx]) {

				this.state.imgsArrangeArr[idx] = {
				pos:{
					left:0,
					top:0
				},
				rotate:0,
				isInverse:false,
				isCenter:false
				}
			}

      imgFigures.push(<ImgFigure center={this.center(idx)} inverse ={this.inverse(idx)} arrange={this.state.imgsArrangeArr[idx]} data={value} key={idx} ref ={'imgFigure' + idx }/>);
	  controllerUnits.push(<ControllerUnit center={this.center(idx)} inverse={this.inverse(idx)} arrange={this.state.imgsArrangeArr[idx]}  key={idx}  />)
	


		}.bind(this));
		return(
			<section className="stage" ref = "stage">
				<section className="img-sec">
				{imgFigures}
				</section>
				<nav className="controller-nav">
				{controllerUnits}

				</nav>
				
				<nav className="linksapp-nav">
					<Links/>
				</nav>

			</section>

			);

	}

}

// <Links className="controller-nav"/>

