import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/commonSection/CommonSection'
import '../style/Registration.css'

const Registration = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const handleSignUp = () => {

        if (!email && !password) {
            setError("Fill the form")
        }
        else if (!name) {
            setError("Enter your name")
        }
        else if (!email) {
            setError("Enter your email")
        }
        else if (!password) {
            setError("Enter your password")
        }
        else if (password.length < 8) {
            setError("Password needed to 8 character!")
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
            .then((useCredential) => {
                updateProfile(auth.currentUser, {
                    displayName: 'matiur',
                    photoURL: ''
                })
                setError("")
                navigate('/login')
                alert('Registration successful please login')
            })
            .catch((error) => {
                console.log(error.code)
                if (email === 'auth/email-already-in-use'){
                    setError('Email already in use')
                }
            })
        }
    }


    return <Helmet title='Registration'>
        <CommonSection title='Registration' />
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12' className='text-center m-auto select'>
                        <div className="login-container form mb-0 mt-0">
                            <div className="login-form">
                                <div className="form-group">
                                    <input type="email" onChange={(e) => setName(e.target.value)} placeholder='Enter your user name' />
                                </div>
                                <div className="form-group">
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                                </div>
                                <div className="form-group">
                                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
                                    <p className='error'>{error}</p>
                                </div> <br />
                            </div>
                            <Link to=''>
                                <button onClick={handleSignUp} className='addToCartBtn'>Sign up</button>
                            </Link>
                        </div>
                        <Link to='/login'><span className='already'>Already have an account?</span> Login!</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
};

export default Registration;

// <Registration></Registration>