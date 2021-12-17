import {ADD_PRODUCT, GET_PRODUCTS_ON_ENTER_PAGE} from "./productsReducerTypes";

const productsReducerInit = {
    count:'',
    products:[]
}
export const productsReducer = (state = productsReducerInit, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state, products: [...state.products, action.payload],
                count: state.count++
            }
        case GET_PRODUCTS_ON_ENTER_PAGE:
            return {
                ...state, products: [...state.products,...action.payload],
                count:action.payload.length
            }
        default:
            return state
    }
}