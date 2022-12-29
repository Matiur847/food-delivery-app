import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ListGroup } from 'reactstrap';
import CartItem from './CartItem';
import '../../../style/shoppingCart.css'
import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from '../../../store/shoppingCart/cartUiSlice';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Cart = () => {

    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart.cartItem);
    const inTotal = useSelector(state => state.cart.totalAmount);
    console.log(inTotal)

    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    }


    // const navigate = useNavigate();
    // const auth = getAuth();

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         // User is signed in, see docs for a list of available properties
    //         // https://firebase.google.com/docs/reference/js/firebase.User
    //         // const uid = user.uid;
    //         // ...
    //         console.log(auth.currentUser.email)
    //     } else {
    //         // User is signed out
    //         // ...
    //         navigate('/login')
    //     }
    // });



    return <div className='cart-container'>
        <ListGroup className='cart'>
            <div className="cart-close">
                <span onClick={toggleCart}>
                    <i class="ri-close-fill"></i>
                </span>
            </div>

            <div className="cart-item-list">

                {
                    cartProducts.length === 0 ? (
                        <h6 className="text-center mt-5">No item added to the cart</h6>
                    ) : (
                        cartProducts.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                    )
                }

            </div>
            <div className="cart-bottom d-flex align-items-center justify-content-between">
                <h6>Subtotal amount: <span>${inTotal}</span></h6>
                <button>
                    <Link to='cart'>
                        Checkout
                    </Link>
                </button>
            </div>
        </ListGroup>
    </div>
};

export default Cart;