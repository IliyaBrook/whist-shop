import {
    GET_ALL_CART_PRODUCTS,
    REMOVE_CART_PRODUCTS,
    ADD_CART_PRODUCT
} from "./cartReducerTypes";

const cartReducerInit = {
    count:0,
    products:[]
}
export const cartReducer = (state = cartReducerInit, action) => {
    switch (action.type) {
        case ADD_CART_PRODUCT:
            return {
                ...state, products: [...state.products, action.payload],
                count: state.count + 1
            }
        case GET_ALL_CART_PRODUCTS:
            return {
                ...state, products: [...state.products,...action.payload],
                count:action.payload.length
            }
        case REMOVE_CART_PRODUCTS:
            return cartReducerInit
        default:
            return state
    }
}