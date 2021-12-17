import {all, call, put } from 'redux-saga/effects'
import {useRequestSaga} from "./saga-hooks/useRequestSaga";
import {GET_PRODUCTS_ON_ENTER_PAGE} from "../redux/reducers/productsReducer/productsReducerTypes";

export function* onRefreshPageSaga () {
    yield all([
        call(getProductsWorker)
    ])
}

export function* getProductsWorker () {
    try {
        const products = yield call(useRequestSaga, {url:'/api/getProducts'})
        yield put({type:GET_PRODUCTS_ON_ENTER_PAGE, payload: products.data })
    }catch (error){
        console.log(error)
    }
}


