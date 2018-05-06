import React, { Component } from 'react';
import './DM2601.css';
import { Container, Row, Col } from 'react-grid-system';
import Scroll from 'react-scroll-to-element';
// import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Github, Mail } from 'react-feather';

class DM2601 extends Component {
	
	scrollToTop(){
		var element = document.getElementById("header");
		element.scrollIntoView({behavior: "smooth"});
	}

	render(){

		return (

			<div>
			<h1>DM2601 Media Technology and Interaction Design</h1>
			DM2601
			<img src="./images/DM2601.png" alt="Image" width="200px" height="200px"/>
			</div>
		);
	}
}

export default DM2601;