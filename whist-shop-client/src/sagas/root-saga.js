import {all, call} from 'redux-saga/effects'
import {onRefreshPageSaga} from "./onRefreshPageSaga";
import {adminSaga} from "./adminSaga";

export function* rootSaga () {
    yield all([
        call(onRefreshPageSaga),
        call(adminSaga)
    ])
}