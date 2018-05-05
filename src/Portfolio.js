import React, { Component } from 'react';
import './Portfolio.css';
import { Container, Row, Col } from 'react-grid-system';
// import Footer from './Footer';
import Header from './Header';
import Footer from './Footer';
import DM2601 from './DM2601';
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
			              <Link to={"./DM2601"}><img src="../images/mail.png" alt="Image" width="100px" height="100px" /></Link>
			            </Col>
			            <Col className="col" xs={6} md={3.6}>
			              <Link to={"./DM2350"}>DM2350</Link>
			            </Col>
			            <Col className="col" xs={6} md={3.6}>
			              dinnerplanner
			            </Col>    
			          </Row><br/><br/>
			          <Row debug>
			            <Col className="col" xs={6} md={3.6}>
			              weather planner 
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