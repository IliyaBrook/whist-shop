import {ADD_PRODUCT, EDIT_PRODUCT, GET_PRODUCTS_ON_ENTER_PAGE, REMOVE_PRODUCT} from "./productsReducerTypes";
import { createReducer } from '@reduxjs/toolkit'


const productsReducerInit = {
    products: []
}

export  const productsReducer = createReducer(productsReducerInit, (builder) => {
    builder.addCase(GET_PRODUCTS_ON_ENTER_PAGE, (state, action) => {
        state.products.push(...action.payload)
    })
        .addCase(ADD_PRODUCT, (state, action) => {
            state.products.push(action.payload)
        })
        .addCase(REMOVE_PRODUCT, (state, action) => {
            const index = state.products.findIndex(e => e._id === action.payload.id)
            state.products.splice(index, 1)
        })
        .addCase(EDIT_PRODUCT, (state, action) => {
            const removeElem = state.products.filter(p => p._id === action.payload.id)
            state.products.splice(action.payload.index, 1,{
                ...removeElem[0],
                price: action.payload.price || removeElem[0].price,
                title: action.payload.title || removeElem[0].title
            })
        })
})