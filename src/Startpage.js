import React, { Component } from 'react';
import './Startpage.css';

import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Flow from './images/flow.png';


class Startpage extends Component {
	
	render(){

		return (
			<div>
			<Header />
			<div id="bod" className="body">
				<img src={Flow} className="images" />
				<div className="content"></div>
			</div>
			<Footer />
			</div>
		);
	}
}

export default Startpage;