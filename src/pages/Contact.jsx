import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/commonSection/CommonSection'
import '../style/Contact.css'

const Contact = () => {

    // const navigate = useNavigate()
    // const auth = getAuth();
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         console.log(auth.currentUser.email)
    //     }
    //     else {
    //         navigate('/login')
    //     }
    // })

    const handleSubmit = (e) => {

        e.preventDefault();
    }


    return (
        <Helmet title='Contact Us'>
            <CommonSection title='Contct Us'></CommonSection>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='12' className='m-auto select'>
                            <div className="info-form">
                                <form id='form-container'>
                                    <div className="head-container">
                                        <div className="contact-container d-flex align-items-center justify-content-center">
                                            <div className="input-field">
                                                <input type="name" placeholder='Full Name' /> <br />
                                                <input type="email" placeholder='Email' /> <br />
                                                <input type="message" placeholder='Message' /> <br />
                                            </div>
                                            <div className="info">
                                                <div className="detail">
                                                    <h5>Contact</h5>
                                                    <p>Email: ghugu@gmail.com</p>
                                                </div>
                                                <div className="detail2">
                                                    <h5>Phone</h5>
                                                    <p>Number: 01444444444</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="btn-icon d-flex align-items-center justify-content-around justify-content-center">
                                            <div className="butn">
                                                    <button className='addToCartBtn' id='submit-btn' onClick={handleSubmit}>Submit</button>
                                            </div>
                                            <div className="icon">
                                                <i class="ri-facebook-circle-fill"></i>
                                                <i class="ri-whatsapp-fill"></i>
                                                <i class="ri-twitter-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Contact;