import React from 'react';
import products from '../assets/fake-data/products';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/commonSection/CommonSection';

import { Col, Container, Row } from 'reactstrap';
import '../style/FoodDetails.css'
import { useState } from 'react';
import ProductCard from '../components/UI/product-card/ProductCard'
import { useEffect } from 'react';
import { cartActions } from '../store/shoppingCart/cartSlice';
import { useDispatch } from 'react-redux';

const FoodsDetails = () => {



    const [tab, setTab] = useState('desc')
    let { id } = useParams();

    const product = products.find(item => item.id === id)
    const [previewImg, setPreviewImg] = useState(product.image01)

    const {category, desc, title, price, image01} = product;

    const relatedItem = products.filter(item => category === item.category)

    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            price,
            category,
            title,
            image01
        }))
    }

    useEffect(() => {
        setPreviewImg(product.image01)
    }, [product])

    useEffect(() => {
        window.scrollTo(0,0)
    }, [product])

    return <Helmet title='Food-details'>
        <CommonSection title={title} />

        <section>
            <Container>
                <Row>
                    <Col lg='2' md='2'>
                        <div className="product-images mb-3">
                            <div className="img-item" onClick={() => setPreviewImg(product.image01)}>
                                <img src={product.image01} alt="" className='w-50' />
                            </div>
                            <div className="img-item mt-3" onClick={() => setPreviewImg(product.image02)}>
                                <img src={product.image02} alt="" className='w-50' />
                            </div>
                            <div className="img-item mt-3" onClick={() => setPreviewImg(product.image03)}>
                                <img src={product.image03} alt="" className='w-50' />
                            </div>
                        </div>
                    </Col>
                    <Col lg='4' md='4'>
                        <div className="product-main-img">
                            <img src={previewImg} alt="" className='w-100' />
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="single-product-content">
                            <h2 className='product-title mb-3'>{title}</h2>
                            <p className='product-price'>Price: <span>${price}</span></p>
                            <p className='category mb-5'>Category: <span>{category}</span></p>
                            <button className="addToCartBtn" onClick={addToCart}>Add to Cart</button>
                        </div>
                    </Col>
                    <Col lg='12'>
                        <div className="tabs d-flex align-items-center gap-5 py-3">
                            <h6 className={` ${tab === 'desc' ? 'tabs-color' : '' } `} onClick={() => setTab('desc')}>Description</h6>
                            <h6 className={` ${tab === 'rev' ? 'tabs-color' : ''} `} onClick={() => setTab('rev')}>Review</h6>
                        </div>

                        {
                            tab === 'desc' ? <div className="tabs-content">
                                <p>
                                    {desc}
                                </p>
                            </div> : <div className="tabs-form">

                                    <div className="review mt-4">
                                        <p className='user-name mb-0'>Name: Gaijin Seant</p>
                                        <p className='email'>Email: gaijin537@gmail.com</p>
                                        <p className='feedback-text'>Review: very nice product</p>
                                </div>
                                    <div className="review mt-4">
                                        <p className='user-name mb-0'>Name: Gaijin Seant</p>
                                        <p className='email'>Email: gaijin537@gmail.com</p>
                                        <p className='feedback-text'>Review: very nice product</p>
                                    </div>
                                    <div className="review mt-4">
                                        <p className='user-name mb-0'>Name: Gaijin Seant</p>
                                        <p className='email'>Email: gaijin537@gmail.com</p>
                                        <p className='feedback-text'>Review: very nice product</p>
                                    </div>

                                <form className='form'>
                                    <div className="form-group">
                                        <input type="text" placeholder='Eneter your name' required />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" placeholder='Eneter your Email@' required />
                                    </div>
                                    <div className="form-group">
                                        <textarea rows={5} type="text" placeholder='Enter you text' required/>
                                    </div>
                                    <div className="submitBtn">
                                        <button type='submit' className="addToCartBtn">Submit</button>
                                    </div>
                                </form>
                            </div>
                        }
                        
                    </Col>
                    <Col lg='12' className='related-product mb-5 mt-4'>
                        <h5>You might also like</h5>
                    </Col>
                    
                    {
                        relatedItem.map(item => (
                            <Col className='product mb-3' lg='3' md='4' sm='6' xs='6' key={item.id}>
                                <ProductCard item={item} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
}
export default FoodsDetails;