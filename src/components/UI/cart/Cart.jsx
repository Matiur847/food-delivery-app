import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';
import CartItem from './CartItem';
import '../../../style/shoppingCart.css'
import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from '../../../store/shoppingCart/cartUiSlice';

const Cart = () => {

    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart.cartItem);
    const inTotal = useSelector(state => state.cart.totalAmount);
    console.log(inTotal)

    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    }



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
            <div className="cart-bottom d-flex align-items-center justify-content-center">
                {/* <h6>Subtotal amount: <span>${}</span></h6> */}
                <button>
                    <Link to='checkout'>
                        Checkout
                    </Link>
                </button>
            </div>
        </ListGroup>
    </div>
};

export default Cart;