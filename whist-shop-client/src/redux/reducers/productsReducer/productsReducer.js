import {
    ADD_PRODUCT,
    EDIT_PRODUCT,
    GET_PRODUCTS_ON_ENTER_PAGE,
    REMOVE_PRODUCT,
    REQUEST_EDIT_PRODUCT
} from "./productsReducerTypes";

const productsReducerInit = {
    count:0,
    products:[]
}
export const productsReducer = (state = productsReducerInit, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state, products: [...state.products, action.payload],
                count: state.count + 1
            }
        case REMOVE_PRODUCT:
            return state
        case EDIT_PRODUCT:
            return state
        case GET_PRODUCTS_ON_ENTER_PAGE:
            return {
                ...state, products: [...state.products,...action.payload],
                count:action.payload.length
            }
        default:
            return state
    }
}