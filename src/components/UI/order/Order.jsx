import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../../Helmet/Helmet';
import CommonSection from '../commonSection/CommonSection';

const Order = () => {
    return (
        <Helmet title='Thanks'>
            <CommonSection title='Order Confirmed'></CommonSection>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='12' className='text-center m-auto select'>
                            <div className="info-form">
                                <h4 className='mb-5'>Thanks For Ordaring</h4>
                                    <Link to='/foods'>
                                        <button className='addToCartBtn'>Continue Shopping</button>
                                    </Link>
                            </div>



                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
        
    );
};

export default Order;