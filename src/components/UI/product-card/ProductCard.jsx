import React from 'react';
import { Link } from 'react-router-dom';

import '../../../style/ProductCard.css'

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shoppingCart/cartSlice';

const ProductCard = (props) => {
    const { id, title, image01, price} = props.item;
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }
    return (
        <div className='product-item'>
            <div className="product-img">
                <img src={image01} alt="" className='w-50' />
            </div>
            <div className="product-content">
                <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                <div className='d-flex justify-content-between'>
                    <span className='product-price'>${price}</span>
                    <button className='addToCartBtn' onClick={addToCart}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;