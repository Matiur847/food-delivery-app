import React, { useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import './Header.css'
import { useSelector, useDispatch } from 'react-redux';
import { cartUiActions } from '../../store/shoppingCart/cartUiSlice';

import { getAuth, signOut } from 'firebase/auth'


const Header = () => {
    const navLink = [
        {
            display: 'Home',
            path: '/home',
        },
        {
            display: 'Foods',
            path: '/foods',
        },
        {
            display: 'Cart',
            path: '/cart',
        },
        {
            display: 'Contact',
            path: '/contact',
        },
    ]

    const menuRef = useRef(null)
    const headerRef = useRef(null)
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const dispatch = useDispatch()

    const toggleMenu = () => menuRef.current.classList.toggle('show-menu')

    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    }

    const navigate = useNavigate();

    const auth = getAuth();
    
    // const handleSignOut = () => {
    //     signOut(auth)
    //         .then(() => {
    //             navigate('/login')
    //         })
    //         .catch((error) => {
    //             console.log(error.code)
    //         })
    // }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            navigate('/login')
        })
        .catch((error) => {
            console.log(error.code)
        })
    }

    return (
        <header className="header header-shrink" ref={headerRef}>
            <Container>
                <div className="nav_wrapper d-flex align-item-center justify-content-between">
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <h5>Tasty Foods</h5>
                    </div>

                    {/* Menu  nav */}
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <div className="menu d-flex align-item-center gap-5">
                            {
                                navLink.map((item, index) => (
                                    <NavLink to={item.path} key={index}
                                        className='active-menu'
                                    >
                                        {item.display}
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>

                    <div className="nav_right d-flex align-item-center gap-3">
                        <span className='cart-icon'>
                            <i className="ri-shopping-bag-line" onClick={toggleCart}></i>
                            <span className='cart-badge'>{totalQuantity}</span>
                        </span>
                        <span className='user'>
                            <Link to='/login'><i className="ri-user-line"></i></Link>
                        </span>
                        <span className="mobile-menu" onClick={toggleMenu}>
                            <i className="ri-menu-line"></i>
                        </span>
                        <span>
                            <Link>
                                <button onClick={handleSignOut} className='logOut addToCarBtn'>Log out</button>
                            </Link>
                        </span>
                        {/* <Link>
                            <button>Log out</button>
                        </Link> */}
                    </div>

                </div>
            </Container>
        </header>
    )
};

export default Header;