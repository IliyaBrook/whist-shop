import { configureStore } from '@reduxjs/toolkit'
import {productsReducer} from './reducers/productsReducer/productsReducer'
import createSagaMiddleware from 'redux-saga'
import thunk from "redux-thunk";
import {rootSaga} from '../sagas/root-saga'
const sagaMiddleware = createSagaMiddleware()


export default configureStore({
    reducer: {
        productsReducer
    },
    middleware:[
        thunk,
        sagaMiddleware
    ],
    devTools:true
})
sagaMiddleware.run(rootSaga)