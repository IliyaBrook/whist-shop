import {all, call, put, takeEvery} from "redux-saga/effects";
import {useRequestSaga} from "./saga-hooks/useRequestSaga";
import {
    ADD_PRODUCT, EDIT_PRODUCT, REMOVE_PRODUCT,
    REQUEST_ADD_PRODUCT,
    REQUEST_EDIT_PRODUCT, REQUEST_REMOVE_PRODUCT
} from "../redux/reducers/productsReducer/productsReducerTypes";
import data from "bootstrap/js/src/dom/data";
import {SHOW_TOAST} from "../redux/reducers/toast/toastReducerTypes";

export function* adminSaga () {
    yield all([
        call(addNewProductWatcher),
        call(editProductWatcher),
        call(removeProductWatcher),
    ])
}
function* removeProductWatcher () {
    return  yield takeEvery(REQUEST_REMOVE_PRODUCT, removeProductWorker)
}

function* removeProductWorker({payload}) {
    try {
        const {response} = yield call(useRequestSaga, {
            url:'/api/removeProduct',
            method:'POST',
            body:{id:payload}
        })
        if (response.ok) {
            yield put({type:REMOVE_PRODUCT, payload:{ id:payload }})
        }
    }catch (error) {
        console.log(error)
    }
}

function* editProductWatcher () {
    return  yield takeEvery(REQUEST_EDIT_PRODUCT, editProductWorker)
}

function* editProductWorker({payload}) {
    console.log(payload)
    try {
        const {response} = yield call(useRequestSaga, {
            url:'/api/editProduct',
            method:'POST',
            body:payload
        })
        if (response.ok) {
            yield put({type:EDIT_PRODUCT, payload})
        }
    }catch (error) {
        console.log(error)
    }
}

function* addNewProductWatcher () {
    return  yield takeEvery(REQUEST_ADD_PRODUCT, addNewProductWorker)
}

function* addNewProductWorker ({payload}) {
    try {
        const response = yield call(useRequestSaga, {
            url:'api/addProduct',
            method:'POST',
            body: {...payload, productId: Date.now()}
        })
        if (response.data.error) {
            return yield put({type:SHOW_TOAST, payload: response.data.error.message})
        }
        yield put({type:ADD_PRODUCT, payload: response.data.product})
    }catch (error){
        console.log('add product error')
        console.log(error)
    }
}
