import React, { Component } from 'react';
import './DM2350.css';
import { Container, Row, Col } from 'react-grid-system';
import Scroll from 'react-scroll-to-element';
// import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Github, Mail } from 'react-feather';

class DM2350 extends Component {
	

	render(){

		return (

			<div>		
			<h1>DM2350 Human Perception for Information Technology</h1>

			<Container>
				<Row debug>
					<Col className="container" xs={6} md={4}>
						<p>Information about the project</p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
						magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
					</Col>
					<Col className="container" xs={6} md={5}>
						<img className="img1" src={require("./images/DM2350/1.png")}/>
					</Col>
				</Row>
				<Row debug>
					<Col className="container" xs={6} md={4}>
						<img className="img2" src={require("./images/DM2350/2.png")}/>
					</Col>
					<Col className="container" xs={6} md={6}>
						<p>More information about the project</p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
						magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
					</Col>					
				</Row>
			</Container>

			</div>
		);
	}
}

export default DM2350;