import React from 'react';
import { useForm } from 'react-hook-form';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../../Helmet/Helmet';
import CommonSection from '../commonSection/CommonSection';
import '../../../style/PlaceOrder.css'
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { useContext } from 'react';

const PlaceOrder = () => {

    // const [user, setUser] = useContext()
    // console.log('userValue is:', user)

    const navigate = useNavigate();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();
    const [city, setCity] = useState();
    const [address, setAddress] = useState();
    const [error, setError] = useState();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        navigate('/confirm-order')
        console.log(data)
    }

    // console.log(watch("example")); // watch input value by passing the name of it 

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // const uid = user.uid;
            // ...
            console.log(auth.currentUser)
            
        }
    });
    // console.log('Order details:', user)

    // const {displayName, email} = user;.
    // console.log('User Info:',  displayName, email)
    // console.log('user info:', user.displayName)

    


    return (
        <Helmet title='Place Order'>
            <CommonSection title='Place Order'></CommonSection>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='12' className='text-center m-auto select'>
                            <div className="info-form">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <p>Personal Info</p>
                                    <div className="form-group">
                                        <input placeholder='Full Name' {...register("name")} required />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder='Email' {...register("email")} required />
                                    </div>

                                    <p>Contact Info</p>
                                    <div className="form-group">
                                        <input placeholder='Mobile Number' {...register("Phone")} required />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder='City / Home town' {...register("Address 1")} required />
                                    </div>
                                    <div className="form-group">
                                        <input placeholder='Address line 2' {...register("Address 2")} required />
                                        <p>{error}</p>
                                    </div>

                                        <button className='addToCartBtn'>Confirm Order</button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default PlaceOrder;