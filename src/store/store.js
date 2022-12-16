import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shoppingCart/cartSlice";
import cartUiSlice from "./shoppingCart/cartUiSlice";


const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUi: cartUiSlice.reducer
    },
});

export default store;