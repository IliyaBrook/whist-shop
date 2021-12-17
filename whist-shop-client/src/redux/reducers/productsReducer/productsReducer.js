import {ADD_PRODUCT, GET_PRODUCTS_ON_ENTER_PAGE} from "./productsReducerTypes";

const productsReducerInit = {
    products:[]
}
export const productsReducer = (state = productsReducerInit, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {...state, products: [...state.products, action.payload]}
        case GET_PRODUCTS_ON_ENTER_PAGE:
            return {...state, products: [...state.products,...action.payload]}
        default:
            return state
    }
}