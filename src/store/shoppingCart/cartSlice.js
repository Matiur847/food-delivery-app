import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: [],
    totalQuantity: 0,
    totalAmount: 0
}

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: initialState,

//     reducers: {

//         // ============= addItem =============

//         addItem(state, action) {
//             const newItem = action.payload
//             const existingItem = state.cartItem.find(item => item.id === newItem.id)
//             state.totalQuantity++

//             if (!existingItem) {

//                 state.cartItem.push({
//                     id: newItem.id,
//                     title: newItem.title,
//                     image01: newItem.image01,
//                     price: newItem.price,
//                     quantity: 1,
//                     totalPrice: newItem.price

//                 })
//             }

//             else {
//                 existingItem.quantity++
//                 existingItem.totalPrice = Number(existingItem.totalPrice)
//                     + Number(newItem.price)
//             }

//             state.totalAmount = state.cartItem.reduce((total, item) => (
//                 total + Number(item.price) * Number(item.quantity)
//             ))
//         },

//         // ============= remove item =============

//         removeItem(state, action) {
//             const id = action.payload
//             const existingItem = state.cartItem.find(item => item.id === id)
//             state.totalQuantity--

//             if(existingItem.quantity === 1) {
//                 state.cartItem = state.cartItem.filter(item => item.id !== id)
//             }

//             else{
//                 existingItem.quantity--
//                 existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)
//             }

//             state.totalAmount = state.cartItem.reduce((total, item) => (
//                 total + Number(item.price) * Number(item.quantity)
//             ))
//         },


//         // ============= remove items =============

//         removeItems(state, action) {
//             const id = action.payload
//             const existingItem = state.cartItem.find(item => item.id === id)
//             state.totalQuantity--

//             if (existingItem.quantity === 1) {
//                 state.cartItem = state.cartItem.filter(item => item.id !== id)
//             }

//             else {
//                 existingItem.quantity--
//                 existingItem.totalPrice = Number(existingItem.totalPrice) - Number(existingItem.price)
//             }

//             state.totalAmount = state.cartItem.reduce((total, item) => (
//                 total + Number(item.price) * Number(item.quantity)
//             ))
//         },

//         // ============= delet item =============

//         deleteItem(state, action) {
//             const id = action.payload;
//             const existingItem = state.cartItem.find((item) => item.id === id);

//             if (existingItem) {
//                 state.cartItem = state.cartItem.filter((item) => item.id !== id);
//                 state.totalQuantity = state.totalQuantity - existingItem.quantity;
//             }

//             state.totalAmount = state.cartItem.reduce(
//                 (total, item) => total + Number(item.price) * Number(item.quantity),
//                 0
//             );
//         },

//     }
// });



const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {
        // =========== add item ============
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItem.find(
                (item) => item.id === newItem.id
            );
            state.totalQuantity++;

            if (!existingItem) {
                // ===== note: if you use just redux you should not mute state array instead of clone the state array, but if you use redux toolkit that will not a problem because redux toolkit clone the array behind the scene

                state.cartItem.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice =
                    Number(existingItem.totalPrice) + Number(newItem.price);
            }

            state.totalAmount = state.cartItem.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),

                0
            );
        },

        // ========= remove item ========

        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItem.find((item) => item.id === id);
            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                state.cartItem = state.cartItem.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice =
                    Number(existingItem.totalPrice) - Number(existingItem.price);
            }

            state.totalAmount = state.cartItem.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );
        },

        //============ delete item ===========

        deleteItem(state, action) {
            const id = action.payload;
            const existingItem = state.cartItem.find((item) => item.id === id);

            if (existingItem) {
                state.cartItem = state.cartItem.filter((item) => item.id !== id);
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }

            state.totalAmount = state.cartItem.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            );
        },
    },
});

export const cartActions = cartSlice.actions
export default cartSlice;