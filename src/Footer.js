import React, { Component } from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-grid-system';
import Scroll from 'react-scroll-to-element';
// import Footer from './Footer';
import { Link } from 'react-router-dom';


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
			    	<a href="https://github.com/annaeklund"><span className="github"></span></a>
			    	<span className="mail"></span>
			    </center>
			          		
			        
			    <br/><br/>
				<div className="to-top" onClick={this.scrollToTop}>
					<Scroll type="className" element="elements" offset={-100}>
					</Scroll>
				</div>

			</div>
		);
	}
}

export default Footer;