import {call} from "redux-saga/effects"

export function* useRequestSaga({url = '', method = 'GET', body = null}) {
    const headers = {}
    if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
    }
    const request = yield call(fetch, url, {method, body, headers})
    const data = yield call([request, request.json])
    return yield {response: request, data }
}