import {all, call, put } from 'redux-saga/effects'
import {useRequestSaga} from "./saga-hooks/useRequestSaga";
import {GET_PRODUCTS_ON_ENTER_PAGE} from "../redux/reducers/productsReducer/productsReducerTypes";
import {GET_ALL_CART_PRODUCTS} from "../redux/reducers/cartReducer/cartReducerTypes";

export function* onRefreshPageSaga () {
    yield all([
        call(getProductsWorker),
        call(getCartWorker)
    ])
}

function* getProductsWorker () {
    try {
        const products = yield call(useRequestSaga, {url:'/api/getProducts'})
        yield put({type:GET_PRODUCTS_ON_ENTER_PAGE, payload: products.data })
    }catch (error){
        console.log(error)
    }
}

function* getCartWorker () {
    try {
        const { data } = yield call(useRequestSaga, {url:'/api/getCart'})
        yield put({type:GET_ALL_CART_PRODUCTS, payload: data.data })
    }catch (error){
        console.log(error)
    }
}


