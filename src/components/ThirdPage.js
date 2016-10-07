
require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'

import Links from "./Links.js"


import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import { Tooltip } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Checkbox } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { Radio } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

const Img1 = require('../images/ui/class/class_bg.png');
const Img2 = require('../images/ui/list/list_bg.png');
const Img3 = require('../images/ui/general/bg_01.png');


export default class ThirdPage extends React.Component{

  constructor(props){
    super(props);
  
  }

  componentDidMount(){

  }

  render(){

    return(

        <Carousel>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src={Img1}/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src={Img2}/>
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} alt="900x500" src={Img3}/>
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <nav className="linksapp-nav">
             <Links  />
            </nav>
      
        </Carousel>

  )}
};

