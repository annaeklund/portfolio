import React, { Component } from 'react';
import './DH2642react.css';
import { Container, Row, Col } from 'react-grid-system';
import Scroll from 'react-scroll-to-element';
// import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Github, Mail } from 'react-feather';

class DH2642react extends Component {
	
	scrollToTop(){
		var element = document.getElementById("header");
		element.scrollIntoView({behavior: "smooth"});
	}

	render(){

		return (

			<div>
			<h1>DH2642 Interaction Programming and the Dynamic Web</h1>
			<p>Information about the course</p>
			</div>
		);
	}
}

export default DH2642react;