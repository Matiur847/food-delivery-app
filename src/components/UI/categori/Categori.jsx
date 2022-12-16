import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import categoriImg01 from '../../../assets/images/category-01.png'
import categoriImg02 from '../../../assets/images/category-02.png'
import categoriImg03 from '../../../assets/images/category-03.png'
import categoriImg04 from '../../../assets/images/category-04.png'

import '../../../style/Category.css'
import ProductCard from '../product-card/ProductCard';

const categoryData = [
    {
        display: 'Fast Food',
        imgUrl: categoriImg01
    },

    {
        display: 'Pizza',
        imgUrl: categoriImg02
    },

    {
        display: 'Asian Food',
        imgUrl: categoriImg03
    },

    {
        display: 'Row Meat',
        imgUrl: categoriImg04
    },
]


const Categori = () => {
    return (
        <Container>
            <Row>
                {
                    categoryData.map((item, index) => (
                        <Col lg='3' md='4' sm='6' xs='6' className='mb-4'>
                            <div className="category-item d-flex align-items-center gap-3">
                                <div className="category-img">
                                    <img src={item.imgUrl} alt="" />
                                </div>
                                <h6>{item.display}</h6>
                            </div>
                        </Col>
                    ))
                }
            </Row>
            {/* <section>
                <ProductCard />
            </section> */}
        </Container>
    )    
};

export default Categori;