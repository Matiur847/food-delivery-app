import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/commonSection/CommonSection';

import products from '../assets/fake-data/products';
import ProductCard from '../components/UI/product-card/ProductCard';
import '../style/AllFoods.css'
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import '../style/Paginator.css'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const AllFoods = () => {
    

    const [searchTerm, setSearchTerm] = useState("");
    const [pageNumber, setPageNumber] = useState(0)

    const productPerPage = 12
    const visitedPage = pageNumber * productPerPage
    const displayPage = products.slice(visitedPage, visitedPage + productPerPage)
    const pageCount = Math.ceil(products.length / productPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }


    const navigate = useNavigate();
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // const uid = user.uid;
            // ...
            console.log(auth.currentUser.email)
        } else {
            // User is signed out
            // ...
            navigate('/login')
        }
    });


    return (
        <Helmet title='All-Foods'>
            <CommonSection title='All Foods' />

            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6" sm="6" xs="12">
                            <div className="search-widget d-flex align-items-center justify-content-between">
                                <input
                                    type="text"
                                    placeholder="I'm looking for...."
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                />
                                <span>
                                    <i class="ri-search-line"></i>
                                </span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
                            <div className="sorting-widget text-end">
                                <select className="w-50">
                                    <option>Default</option>
                                    <option value="ascending">A-Z</option>
                                    <option value="descending">Z-A</option>
                                    <option value="high-price">High Price</option>
                                    <option value="low-price">Low Price</option>
                                </select>
                            </div>
                        </Col>
                        {
                            displayPage.filter(item => {
                                if(searchTerm.value === '') return item;
                                if(item.title.toLowerCase().includes(searchTerm.toLowerCase()))
                                return item;
                            })
                            .map((item) => (
                                <Col lg='3' md='4' sm='6' xs='6' key={item.id}>
                                    <ProductCard item={item} />
                                </Col>
                            ))
                        }
                        <div>
                            <ReactPaginate pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel='Prev'
                                nextLabel='Next'
                                containerClassName='paginatorBtns'
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>

    )
};

export default AllFoods;