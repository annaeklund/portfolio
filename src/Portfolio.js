import React, { Component } from 'react';
import './Portfolio.css';
import { Container, Row, Col } from 'react-grid-system';
// import Footer from './Footer';
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
			            <Col className="col" xs={6} md={3.6}>
			              EN BILD
			            </Col>
			            <Col className="col" xs={6} md={3.6}>
			              EN TILL
			            </Col>
			            <Col className="col" xs={6} md={3.6}>
			              ÄNNU EN
			            </Col>    
			          </Row><br/><br/>
			          <Row debug>
			            <Col className="col" xs={6} md={3.6}>
			              EN BILD
			            </Col>
			            <Col className="col" xs={6} md={3.6}>
			              EN TIL
			            </Col>
			            <Col className="col" xs={6} md={3.6}>
			              ÄNNU EN
			            </Col>      
			          </Row><br/><br/>
			          <Row debug>
			            <Col className="col" xs={6} md={3.6}>
			              EN BILD
			            </Col>
			            <Col className="col" xs={6} md={3.6}>
			              EN TIL
			            </Col>
			            <Col className="col" xs={6} md={3.6}>
			              ÄNNU EN
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