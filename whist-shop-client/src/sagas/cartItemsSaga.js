import {all, call, put, takeEvery, select } from "redux-saga/effects";
import {
    ADD_CART_PRODUCT,
    REMOVE_CART_PRODUCTS,
    REQUEST_ADD_CART_PRODUCT,
    REQUEST_PAY
} from "../redux/reducers/cartReducer/cartReducerTypes";
import {useRequestSaga} from "./saga-hooks/useRequestSaga";

export function* cartItemsSaga() {
    yield all([
        call(addCartSagaWatcher),
        call(makePayWatcher),
    ])
}

function* makePayWatcher(){
    return yield takeEvery(REQUEST_PAY, makePayWorker)
}
function* makePayWorker(){
    const curCartItems =  yield select(state => state.cartReducer)
    try {
        const { response } = yield call(useRequestSaga,{
            url:'/api/pay',method:'POST',body: curCartItems
        })
        if (response.ok) {
            yield put({type:REMOVE_CART_PRODUCTS})
        }
    }catch (error) {
        console.log(error)
    }
}

function* addCartSagaWatcher() {
    return yield takeEvery(REQUEST_ADD_CART_PRODUCT, addCartSagaWorker)
}

function* addCartSagaWorker({payload}) {
    try {
        const { response } = yield call(useRequestSaga,{
            url:'/api/addCart',method:'POST',body: payload
        })
        if (response.ok) {
            yield put({type:ADD_CART_PRODUCT, payload})
        }
    }catch (error) {
        console.log(error)
    }
}