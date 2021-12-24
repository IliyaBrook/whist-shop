import { configureStore } from '@reduxjs/toolkit'
import {productsReducer} from './reducers/productsReducer/productsReducer'
import {cartReducer} from "./reducers/cartReducer/cartReducer";
import createSagaMiddleware from 'redux-saga'
import thunk from "redux-thunk";
import {rootSaga} from '../sagas/root-saga'
import {toastReducer} from "./reducers/toast/toastReducer";
const sagaMiddleware = createSagaMiddleware()


export default configureStore({
    reducer: {
        productsReducer,
        cartReducer,
        toastReducer,
    },
    middleware:[
        thunk,
        sagaMiddleware
    ],
    devTools:true
})
sagaMiddleware.run(rootSaga)