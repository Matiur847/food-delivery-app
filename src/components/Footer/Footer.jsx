import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import './Footer.css'


const Footer = () => {
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='3' md='4' sm='6'>
                    <div className="logo footer-logo text-start">
                        <img src={logo} alt="logo" />
                        <h5>Tasty Foods</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, distinctio!</p>
                    </div>
                </Col>

                <Col lg='3' md='4' sm='6'>
                    <ListGroup className='delivery-time-list'>
                        <ListGroupItem className='delivery-time-item border-0 sp-0'>
                            <h5 className='footer-title'>Delivery Time</h5>
                            <span>Sunday - Thursday</span>
                            <p>8:00am - 10:00pm</p>

                            <span>Friday - Saturday</span>
                            <p>Store Off</p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col lg='3' md='4' sm='6'>
                    <ListGroup className='delivery-time-list'>
                        <ListGroupItem className='delivery-time-item border-0 sp-0'>
                            <h5 className='footer-title'>Contact</h5>
                            <p>Location: honna-5270</p>
                            <span>Phone: 01444444444</span>
                            <br />

                            <span>Email: ghugu@gmail.com</span><br />
                            <div className="social-icon">
                                {/* <span><i class="ri-facebook-fill"></i></span>
                                <span><i class="ri-facebook-fill"></i></span>
                                <span><i class="ri-facebook-fill"></i></span>
                                <span><i class="ri-facebook-fill"></i></span> */}
                                <ul>
                                    <li>
                                        <Link to="/login"><i class="ri-facebook-fill"></i></Link>
                                        <Link to="/login"><i class="ri-twitter-fill"></i></Link>
                                        <Link to="/login"><i class="ri-instagram-line"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col lg='3' md='4' sm='6'>
                    <ListGroup className='delivery-time-list'>
                        <ListGroupItem className='delivery-time-item border-0 sp-0'>
                            <h5 className='footer-title'>Get Update</h5>
                            <p>Singn Up here</p>
                            <div className="update">
                                <input type="text" placeholder='Enter your email'/>
                                <span><i className='ri-send-plane-line'></i></span>
                            </div>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
            </Row>

            <div className="footer-container">
                <div className="footer-title">
                    <p>Copyright © - 2022 All Right Reserved.</p>
                </div>
            </div>
        </Container>
    </footer>
};

export default Footer;