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




export default class SecondPage extends React.Component{

	constructor(props){
		super(props);
	
	}

	componentDidMount(){

	}

	render(){

		return(
			<section className="stage" ref = "stage">
      
        <form>
          <FormGroup controlId="formValidationSuccess1" validationState="success">
                  <FormControl type="text" />
            <HelpBlock>Help text with validation state.</HelpBlock>
          </FormGroup>

          <FormGroup controlId="formValidationWarning1" validationState="warning">
            <ControlLabel>Input with warning</ControlLabel>
            <FormControl type="text" />
          </FormGroup>

          <FormGroup controlId="formValidationError1" validationState="error">
            <ControlLabel>Input with error</ControlLabel>
            <FormControl type="text" />
          </FormGroup>

          <FormGroup controlId="formValidationSuccess2" validationState="success">
            <ControlLabel>Input with success and feedback icon</ControlLabel>
            <FormControl type="text" />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup controlId="formValidationWarning2" validationState="warning">
            <ControlLabel>Input with warning and feedback icon</ControlLabel>
            <FormControl type="text" />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup controlId="formValidationError2" validationState="error">
            <ControlLabel>Input with error and feedback icon</ControlLabel>
            <FormControl type="text" />
            <FormControl.Feedback />
          </FormGroup>

          <FormGroup controlId="formValidationSuccess3" validationState="success">
            <ControlLabel>Input with success and custom feedback icon</ControlLabel>
            <FormControl type="text" />
            <FormControl.Feedback>
              <Glyphicon glyph="music" />
            </FormControl.Feedback>
          </FormGroup>

          <FormGroup controlId="formValidationWarning3" validationState="warning">
            <ControlLabel>Input group with warning</ControlLabel>
            <InputGroup>
              <InputGroup.Addon>@</InputGroup.Addon>
              <FormControl type="text" />
            </InputGroup>
            <FormControl.Feedback />
          </FormGroup>

          <Form componentClass="fieldset" horizontal>
            <FormGroup controlId="formValidationError3" validationState="error">
              <Col componentClass={ControlLabel} xs={3}>
                Input with error
              </Col>
              <Col xs={9}>
                <FormControl type="text" />
                <FormControl.Feedback />
              </Col>
            </FormGroup>

            <FormGroup controlId="formValidationSuccess4" validationState="success">
              <Col componentClass={ControlLabel} xs={3}>
                Input group with success
              </Col>
              <Col xs={9}>
                <InputGroup>
                  <InputGroup.Addon>@</InputGroup.Addon>
                  <FormControl type="text" />
                </InputGroup>
                <FormControl.Feedback />
              </Col>
            </FormGroup>
          </Form>

          <Form componentClass="fieldset" inline>
            <FormGroup controlId="formValidationWarning4" validationState="warning">
              <ControlLabel>Input with warning</ControlLabel>
              {' '}
              <FormControl type="text" />
              <FormControl.Feedback />
            </FormGroup>
            {' '}
            <FormGroup controlId="formValidationError4" validationState="error">
              <ControlLabel>Input group with error</ControlLabel>
              {' '}
              <InputGroup>
                <InputGroup.Addon>@</InputGroup.Addon>
                <FormControl type="text" />
              </InputGroup>
              <FormControl.Feedback />
            </FormGroup>
          </Form>

          <Checkbox validationState="success">
            Checkbox with success
          </Checkbox>
          <Radio validationState="warning">
            Radio with warning
          </Radio>
          <Checkbox validationState="error">
            Checkbox with error
          </Checkbox>

          {/* This requires React 15's <span>-less spaces to be exactly correct. */}
          <FormGroup validationState="success">
            <Checkbox inline>
              Checkbox
            </Checkbox>
            {' '}
            <Checkbox inline>
              with
            </Checkbox>
            {' '}
            <Checkbox inline>
              success
            </Checkbox>
          </FormGroup>
        </form>

				<nav className="linksapp-nav">
				 <Links  />
				</nav>


			</section>

			);

	}

}
