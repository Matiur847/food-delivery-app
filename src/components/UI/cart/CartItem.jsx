import React from 'react';
import { ListGroup } from 'reactstrap';
import productImg from '../../../assets/images/product_01.1.jpg'
import '../../../style/CartItem.css'
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shoppingCart/cartSlice'



const CartItem = ({item}) => {

    const {id, title, price, image01, quantity, totalPrice} = item;

    const dispatch = useDispatch()

    const increment = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image01
        }))
    }

    const decrement = () => {
        dispatch(cartActions.removeItem(id))
    }

    const deletItem = () => {
        dispatch(cartActions.deleteItem(id))
    }

    
    return (
        <ListGroup className='border-0 cart-item'>
            <div className="cart-item-info d-flex gap-2">
                <img src={image01} alt="" />

                <div className="cart-product-info w-100 align-items-center justify-content-between gap-4 d-flex">
                    <div>
                        <h6 className='cart-product-title'>{title}</h6>
                        <p className='cart-product-price d-flex align-items-center gap-5'>{quantity}x<span>${totalPrice}</span></p>
                        <div className='increase-decrease-btn d-flex justify-content-between align-items-center gap-4'>
                            <span className='increase-btn' onClick={increment}><i class="ri-add-line"></i></span>
                            <span className='quantity'>{quantity}</span>
                            <span className='decrease-btn' onClick={decrement}><i class="ri-subtract-line"></i></span>
                        </div>
                    </div>
                </div>
                <span className='delet-btn' onClick={deletItem}><i class="ri-close-line"></i></span>
            </div>
        </ListGroup>
    )
};

export default CartItem;