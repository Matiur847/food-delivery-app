import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/commonSection/CommonSection'
import '../style/Login.css'

import * as firebase from 'firebase/app'
import "firebase/app"
import firebaseConfig from '../firebaseConfig';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useState } from 'react';


firebase.initializeApp(firebaseConfig)


const Login = () => {

    const [user, setUser] = useState();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate();

    const handleSignIn = () => {

        const auth = getAuth();
        


        if (!email && !password) {
            setError("Fill the form")
        }
        else if (!email) {
            setError("Enter your name")
        }
        else if (!password) {
            setError("Enter your password")
        }
        else if (password.length < 8) {
            setError("Password must be needed to 8 character!")
        }
        else {
            signInWithEmailAndPassword(auth, email, password)
                .then((useCredential) => {
                    navigate('/home')
                    alert('Login successful')
                    setUser(useCredential.user)
                })
                .catch((error) => {
                    console.log(error.code)
                    if (error.code === 'auth/wrong-password') {
                        setError('Wrong Password')
                    }
                    else if (error.code === 'auth/user-not-found') {
                        setError('User email not found')
                    }
                })
            // setError("") 
        }
    }


    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // const uid = user.uid;
            // ...
            console.log(auth.currentUser)
            navigate('/')
        }
    });


    return (
    <Helmet title='Login'>
        <CommonSection title='Login' />
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12' className='text-center m-auto select'>
                        {/* <form action="" className="form mb-2">
                            <div className="form-group">
                                <input onChange={(e) => setEmail(e)} type="email" placeholder='Email' />

                            </div>
                            <div className="form-group">
                                <input onChange={(e) => setPassword(e)} type="password" placeholder='Password' />

                            </div>
                            <p>{error}</p>
                            <div className="loginBtn text-center">
                                <Link>
                                <button type='submit' className='addToCartBtn' onClick={handleSignUp}>Login</button>
                                </Link>
                            </div>
                        </form>
                        <Link to='/registration'><span className='already'>Already have an account?</span> Create an account</Link> */}

                        <div className="login-container form mb-0 mt-0">
                            <div className="login-form">
                                <div className="form-group">
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email or user ID' /></div> <br />
                                <div className="form-group">
                                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
                                    <p className='error'>{error}</p>
                                </div> <br />
                            </div>
                            <Link to=''>
                                <button onClick={handleSignIn} className='addToCartBtn'>Login</button>
                            </Link>
                        </div>
                        <Link to='/registration'><span className='already'>Don't have an account?</span> Registration!</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>)
};

export default Login;