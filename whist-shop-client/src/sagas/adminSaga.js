import {all, call, put, takeEvery } from "redux-saga/effects";
import {useRequestSaga} from "./saga-hooks/useRequestSaga";
import {
    ADD_PRODUCT,
    REQUEST_ADD_PRODUCT,
    REQUEST_EDIT_PRODUCT
} from "../redux/reducers/productsReducer/productsReducerTypes";

export function* adminSaga () {
    yield all([
        call(addNewProductWatcher),
        call(editProductWatcher),
    ])
}

function* editProductWatcher () {
    return  yield takeEvery(REQUEST_EDIT_PRODUCT, editProductWorker)
}

function* editProductWorker({payload}) {
    console.log(payload)
}

function* addNewProductWatcher () {
    return  yield takeEvery(REQUEST_ADD_PRODUCT, addNewProductWorker)
}

function* addNewProductWorker ({payload}) {
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
        console.log(error)
    }
}
