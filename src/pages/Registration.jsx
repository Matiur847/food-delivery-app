import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/commonSection/CommonSection'
import '../style/Registration.css'

const Registration = () => {
    return <Helmet title='Registration'>
        <CommonSection title='Registration' />
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12' className='text-center m-auto'>
                        <form action="" className="form mb-2">
                            <div className="form-group">
                                <input type="text" placeholder='Full Name' required />

                            </div>
                            <div className="form-group">
                                <input type="email" placeholder='Email' required />

                            </div>
                            <div className="form-group">
                                <input type="password" placeholder='Password' required />

                            </div>
                            <div className="loginBtn text-center">
                                {/* <Link to='/home'> */}
                                <button type='submit' className='addToCartBtn'>Sign Up</button>
                                {/* </Link> */}
                            </div>
                        </form>
                        <Link to='/login'>Create an account <span className='already'>Already have an account?</span></Link>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
};

export default Registration;

// <Registration></Registration>