import React from 'react';
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
import Routes from '../../routes/Routers'
import Cart from '../UI/cart/Cart.jsx';
import { useSelector } from 'react-redux';

const Layout = () => {
    const showCart = useSelector(state => state.cartUi.cartVisible)
    return (
        <div>
            <Header />

            {
                showCart && <Cart />
            }
            <div>
                <Routes />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;