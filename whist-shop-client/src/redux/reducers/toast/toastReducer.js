import { SHOW_TOAST, HIDE_TOAST } from './toastReducerTypes'

const toastInit = {
    show:false,
    message: ''
}

export const toastReducer = (state = toastInit, action) => {
    switch (action.type) {
        case SHOW_TOAST:
            return {...state, show: true, message: action.payload}
        case HIDE_TOAST:
            return {...state, show: false}
        default:
            return state
    }
}