import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home'
import AllFoods from '../pages/AllFoods'
import FoodsDetails from '../pages/FoodsDetails'
import Cart from '../pages/Cart'
import CheckOut from '../pages/CheckOut'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import PlaceOrder from '../components/UI/place-order/PlaceOrder';
import Order from '../components/UI/order/Order';

const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/foods' element={<AllFoods />} />
        <Route path='/foods/:id' element={<FoodsDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/confirm-order' element={<Order />} />
    </Routes>
};

export default Routers;