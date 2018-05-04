import React, { Component } from 'react';
import './Startpage.css';

import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';


class Startpage extends Component {
	
	render(){

		return (
			<div>
			<Header />
			<div className="body"><br/>TBD</div>
			<Footer />
			</div>
		);
	}
}

export default Startpage;