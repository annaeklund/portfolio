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
					            <Link to="/DH2642react">
					              	<img className="image" src={require("./images/DH2642/DP.png")} alt="Image" width="200px" height="200px" />
					                <div class="middle">
									    <div class="text">DH2642</div>
									</div>
								</Link>
				            </center>
			            </Col>   

			            <Col className="container" xs={6} md={3.6}>
				            <center>
					            <Link to="/DM2350">
					              	<img className="image" src={require("./images/DM2350/DM.png")} alt="Image" width="200px" height="200px" />
					              	<div class="middle">
								    	<div class="text">DM2350</div>
								 	</div>
								</Link>
							</center>
			            </Col>

			            <Col className="container" xs={6} md={3.6}>
				            <center>
					            <Link to="/DH2642vue">
					              	<img className="image" src={require("./images/DH2642/vue.png")} alt="Image" width="200px" height="200px" />
					                <div class="middle">
					                	<div class="text">DH2642</div>   
									 </div>
								</Link>
				            </center>
			            </Col>
			          </Row><br/><br/>

			          <Row debug>
			            <Col className="container" xs={6} md={3.6}>
				            <center>
				            	<Link to="/DM2601">
				              		<img className="image" src={require("./images/DM2601/2601.png")} alt="Image" width="300px" height="300px" />
				               		<div class="middle">
								    	<div class="text">DM2601</div>
								 	</div>
								</Link>
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