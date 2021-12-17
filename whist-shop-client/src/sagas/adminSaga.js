import {all, call, put, takeEvery } from "redux-saga/effects";
import {useRequestSaga} from "./saga-hooks/useRequestSaga";
import {ADD_PRODUCT, REQUEST_ADD_PRODUCT} from "../redux/reducers/productsReducer/productsReducerTypes";

export function* adminSaga () {
    yield all([
        call(addNewProductWatcher)
    ])
}

export function* addNewProductWatcher () {
    return  yield takeEvery(REQUEST_ADD_PRODUCT, addNewProductWorker)
}

export function* addNewProductWorker ({payload}) {
    try {
        console.log('payload', payload)
        const response = yield call(useRequestSaga, {
            url:'api/addProduct',
            method:'POST',
            body:payload
        })
        if (response.data.error) {
            console.log(response.data.error.message)
        }
        yield put({type:ADD_PRODUCT, payload: response.data.product})
    }catch (error){
        console.log('error')
        console.log(error)
    }
}
