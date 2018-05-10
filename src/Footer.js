import React, { Component } from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-grid-system';
import Scroll from 'react-scroll-to-element';
// import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Github, Mail, Linkedin } from 'react-feather';

class Footer extends Component {
	
	scrollToTop(){
		var element = document.getElementById("header");
		element.scrollIntoView({behavior: "smooth"});
	}

	render(){

		return (

			<div className="footer">
			    <br/><br/>
			    <center>
			    	<div id="anna"></div><br/>
		    		<a href="https://www.linkedin.com/in/anna-m-eklund/" target="Linkedin">
		    		<Linkedin className="footer-icon" />
		    		</a>
			    	<a href="https://github.com/annaeklund" target="Github">
			    		<Github className="footer-icon" />
		    		</a>
		    		<a href="mailto:annaeklu@kth.se">
		    			<Mail className="footer-icon" />
		    		</a>
			    </center>
			    <br/>
				<div className="to-top" onClick={this.scrollToTop}>
					<Scroll type="id" element="header" offset={0}>
					</Scroll>
				</div>

			</div>
		);
	}
}

export default Footer;