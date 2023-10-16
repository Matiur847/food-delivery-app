import React from 'react';
import CommonSection from '../components/UI/commonSection/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import '../style/Cart.css'
import { cartActions } from '../store/shoppingCart/cartSlice';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
    const cartItem = useSelector(state => state.cart.cartItem)

    const totalAmount = useSelector(state => state.cart.totalAmount)

    const navigate = useNavigate();
    const auth = getAuth();
    
    onAuthStateChanged(auth, (user) =>{
        if(user) {
            console.log(auth.currentUser.email)
        }
        else {
            navigate('/login')
        }
    })
    return <Helmet title='Cart'>
        <CommonSection title='Your Cart' />
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        {
                            cartItem.length === 0 ? <h5 className='text-center'>Your Cart is Empty</h5> :
                                <div>
                                    <table className='table table-bordered'>
                                        <thead>
                                            <tr>
                                                <th className='undef'>Image</th>
                                                <th className='undef'>Product Title</th>
                                                <th className='undef'>Price</th>
                                                <th className='undef'>Quantity</th>
                                                <th className='undef'>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            {
                                                cartItem.map(item => (
                                                    <Tr item={item} key={item.id} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    <div className='place-order d-flex align-items-center'>
                                        <div className="price">
                                            <h6>Subtotal: <span>${totalAmount}</span></h6>
                                        </div>
                                        <div className="orderBtn">
                                            <Link to='/place-order'>
                                                <button className='addToCartBtn'>Place Order</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                        }
                        
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
};

const Tr = (props) => {

    const dispatch = useDispatch();

    const removeItem = () => {
        dispatch(cartActions.deleteItem(id))
    }

    const {id, image01, price, quantity, title } = props.item
    
    return <tr className='align-items-center justyfi-content-center'>
        <td className='cart-img'>
            <img src={image01} alt="" />
        </td>
        <td>{title}</td>
        <td>${price}</td>
        <td>{quantity}X</td>
        <td className='deletBtn' onClick={removeItem}><i class="ri-delete-bin-7-fill"></i></td>
    </tr>
}

export default Cart;