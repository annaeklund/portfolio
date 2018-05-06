import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Scroll from 'react-scroll-to-element';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
	

	render(){



		return (
			<div id="header">
				<div className="elements">
				<span className="me"><a href="/">Me</a></span>
				<span className="about"><Scroll type="id" element="anna" offset={-100} >
					   About 
				</Scroll></span>
				<span className="portfolio"><a href="/work">Work</a></span>
				</div>

				<div class="nav-bar"></div>
			</div>

		);
	}
}
export default Header;