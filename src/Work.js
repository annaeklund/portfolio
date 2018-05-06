import React, { Component } from 'react';
import './Work.css';
import { Container, Row, Col } from 'react-grid-system';

import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';



class Portfolio extends Component {
	
	render(){

		return (
			<div>
			<Header />
			<div className="portfolioContent">
				<div className="background">
				</div><br/><br/>
				<div className="presentation">
				</div>
					<Container>
			          <Row debug>
			            <Col className="container" xs={6} md={3.6}>
			            <center>
			              <img className="image" src={require("./images/DH2642/DH2642react.png")} alt="Image" width="200px" height="200px" />
			                <div class="middle">
			                	<Link to="/DH2642react">
							    <div class="text">DH2642</div>
							    </Link>
							 </div>
			            </center>
			            </Col>   

			            <Col className="container" xs={6} md={3.6}>
			            <center>
			              <img className="image" src={require("./images/DM2350/DM2350.JPG")} alt="Image" width="200px" height="200px" />
			                <div class="middle">
			                	<Link to="/DM2350">
							    <div class="text">DM2350</div>
							    </Link>
							 </div>
						</center>
			            </Col>
			            <Col className="container" xs={6} md={3.6}>
			            <center>
			              <img className="image" src={require("./images/DH2642/DH2642vue.png")} alt="Image" width="200px" height="200px" />
			                <div class="middle">
			                	<Link to="/DH2642vue">
							    <div class="text">DH2642</div>
							    </Link>
							 </div>
			            </center>
			            </Col>
			          </Row><br/><br/>
			          <Row debug>
			            <Col className="container" xs={6} md={3.6}>
			            <center>
			              <img className="image" src={require("./images/DM2601/DM2601.JPG")} alt="Image" width="300px" height="300px" />
			                <div class="middle">
			                	<Link to="/DM2601">
							    <div class="text">DM2601</div>
							    </Link>
							 </div>
						</center>
			            </Col>

			            <Col className="container" xs={6} md={3.6}>
			            <center>
			              placeholders for more projects
			              </center>
			            </Col>
			            <Col className="container" xs={6} md={3.6}>
			              placeholders for more projects
			            </Col>      
			          </Row><br/><br/>
			          <Row debug>
			            <Col className="col" xs={6} md={3.6}>
			              placeholders for more projects
			            </Col>
			            <Col className="col" xs={6} md={3.6}>
			              placeholders for more projects
			            </Col>
			            <Col className="col" xs={6} md={3.6}>
			              placeholders for more projects
			            </Col>      
			          </Row>
			          </Container>
			</div>
			<Footer />
			</div>
		);
	}
}

export default Portfolio;