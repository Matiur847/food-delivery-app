import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import heroPng from '../assets/images/hero.png'
import '../style/Home.css'
import { Link, useNavigate } from 'react-router-dom';
import Categori from '../components/UI/categori/Categori';

import featureImg1 from '../assets/images/service-01.png'
import featureImg2 from '../assets/images/service-02.png'
import featureImg3 from '../assets/images/service-03.png'
import ProductCard from '../components/UI/product-card/ProductCard';

import fakeData from '../assets/fake-data/products'

import productCategoryImg01 from "../assets/images/hamburger.png";
import productCategoryImg02 from "../assets/images/pizza.png";
import productCategoryImg03 from "../assets/images/bread.png";

import whyImg from '../assets/images/location.png'

import network from '../assets/images/network.png'




import { useState } from 'react';
import { useEffect } from 'react';
import TestimonialSlider from '../components/UI/slider/TestimonialSlider';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const featureData = [
    {
        title: 'Quick Delivery',
        imgUrl: featureImg1,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, rerum.'
    },

    {
        title: 'Super Dine In',
        imgUrl: featureImg2,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, rerum.'
    },

    {
        title: 'Easy Pick Up',
        imgUrl: featureImg3,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, rerum.'
    },
]


const Home = () => {

    const auth = getAuth();

    const [category, setCategory] = useState('ALL')
    const [allProduct, setAllProduct] = useState(fakeData)

    const [hotPizza, hotSetPizza] = useState([])

    useEffect(() => {
        const filteredPizza = fakeData.filter(item => item.category === 'Pizza')
        const slicePizza = filteredPizza.slice(0, 4)
        hotSetPizza(slicePizza)
    }, [])

    useEffect(() => {
        if (category === 'ALL') {
            setAllProduct(fakeData)
        }

        if (category === 'BURGER') {
            const filterProducts = fakeData.filter(item => item.category ===
                'Burger')

            setAllProduct(filterProducts)
        }

        if (category === 'PIZZA') {
            const filterProducts = fakeData.filter(item => item.category ===
                'Pizza')

            setAllProduct(filterProducts)
        }

        if (category === 'BREAD') {
            const filterProducts = fakeData.filter(item => item.category ===
                'Bread')

            setAllProduct(filterProducts)
        }
    }, [category])

    const navigate = useNavigate();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // const uid = user.uid;
            // ...
            console.log(auth.currentUser.email)
        }
        else {
            // User is signed out
            // ...
            navigate('/login')
        }
    });

    return <Helmet title='Home'>{
        // console.log(auth.currentUser.)
    }
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero-content">
                            <h5 className='mb-3'>Very easy way to make an order any food</h5>
                            <h1 className='mb-4 hero-title'><span>HUNGRY?</span>just wait <br /> food at<span> your door</span></h1>

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vero et assumenda unde? Quaerat, obcaecati?</p>

                            <div className="hero-btn d-flex align-items-center gap-5 mt-4">
                                <button className='order-btn d-flex align-items-center justify-content-between'>Order now <i class="ri-arrow-right-s-line"></i>
                                </button>

                                <button className='all-foods-btn'>
                                    <Link to='/foods'>See all foods</Link>
                                </button>
                            </div>
                            <div className='hero-service d-flex align-items-center gap-5 mt-4'>
                                <p className='shipping-icon'>
                                    <span className='shopping-icon d-flex align-items-center gap-2'>
                                        <i class="ri-car-line"></i>No shipping charge
                                    </span>
                                </p>

                                <p className=''>
                                    <span className='shopping-icon d-flex align-items-center gap-2'>
                                        <i class="ri-shield-check-line"></i>100% secure checkout
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="hero-img">
                            <img src={heroPng} alt="HeroImg" className='w-100' />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>

        <section className='pt-0'>
            <Categori />
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <h5 className='feature-subtitle'>What we serve</h5>
                        <h2 className='feature-title'>Just sit back at home</h2>
                        <h2 className='feature-title'>we will <span>take care</span></h2>
                        <p className='mb-1 mt-4 feature-text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, commodi!
                        </p>
                        <p className='feature-text'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, itaque? {""}
                        </p>
                    </Col>
                    {
                        featureData.map((item, index) => (
                            <Col lg='4' md='6' sm='6' key={index} className='mt-4'>
                                <div className="feature-item text-center px-5 py-3">
                                    <img src={item.imgUrl} alt="" className='w-25 mb-3' />
                                    <h5 className='fw-bold mb-3'>{item.title}</h5>
                                    <p>{item.description}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>

            <section>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2>Popular Food</h2>
                        </Col>
                        <Col lg='12' className='food-category d-flex justify-content-center gap-5'>
                            <button className={`allBtn ${category === 'ALL' ? 'foodBtnActive' : ''} `}


                                onClick={() => setCategory('ALL')}>All</button>
                            <button className={`d-flex align-items-center gap-2 ${category === 'BURGER' ? 'foodBtnActive' : ''} `} onClick={() => setCategory('BURGER')}>
                                <img src={productCategoryImg01} alt="" />
                                Burger
                            </button>
                            <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA' ? 'foodBtnActive' : ''} `}
                                onClick={() => setCategory('PIZZA')}
                            >
                                <img src={productCategoryImg02} alt="" />
                                Pizza
                            </button>
                            <button className={`d-flex align-items-center gap-2 ${category === 'BREAD' ? 'foodBtnActive' : ''}`}
                                onClick={() => setCategory('BREAD')}
                            >
                                <img src={productCategoryImg03} alt="" />
                                Bread
                            </button>
                        </Col>
                        {
                            allProduct.map(item => (
                                <Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
                                    <ProductCard item={item} />
                                </Col>
                            ))
                        }

                    </Row>
                </Container>
            </section>
        </section>

        <section className='why-choose-us'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <img src={whyImg} alt="whyImg" className='w-100' />
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="why-tasty-treat">
                            <h2 className='tasty-treat-title mb-4'>Why <span>Tasty Treat?</span></h2>
                            <p className='tasty-treat-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio dolores animi aut aperiam, neque minima corrupti ratione, non pariatur explicabo nemo repudiandae maiores placeat? A ut cumque beatae alias.</p>

                            <ListGroup className='mt-4'>
                                <ListGroupItem className='border-0 ps-0'>
                                    <p className='check-title d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"></i>Fresh and tasty foods</p>
                                    <p className='check-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, harum.</p>

                                    <p className='check-title d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"></i>Quality support</p>
                                    <p className='check-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, harum.</p>

                                    <p className='check-title d-flex align-items-center gap-2'><i className="ri-checkbox-circle-line"></i>Order from any location</p>
                                    <p className='check-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, harum.</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

        <section className='pt-0'>
            <Container>
                <Row>
                    <Col lg='12' className='text-center mb-5'>
                        <h2>Hot Pizza</h2>
                    </Col>
                    {
                        hotPizza.map(item => (
                            <Col lg='3' md='4' sm='6' xs='6' key={item.id}>
                                <ProductCard item={item} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>

        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className='testimonial mb-5'>
                            <h5 className='testimonial-subtitle mb-4'>Testimonial</h5>
                            <h2 className='testimonial-title mb-4'>What our <span>customers</span> are saying</h2>
                            <p className='testimonial-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nisi quasi inventore rerum debitis animi pariatur impedit voluptatem excepturi expedita!</p>
                            <TestimonialSlider />
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <img src={network} alt="" className='w-100' />
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>

};

export default Home;