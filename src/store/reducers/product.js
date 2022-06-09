import { SET_ALL_PRODUCTS, SET_ONE_PRODUCT, SET_POPULAR_PRODUCTS } from "../actionConstants"

const defaultState = {
    allProducts: [],
    numOfProducts: 0,
    popularProducts: [],
    oneProduct: [],
}

export const products = (state = defaultState, {type, payload}) => {
    switch(type) {
        case SET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: payload,
                numOfProducts: payload.countProudcts,
            }
        case SET_POPULAR_PRODUCTS:
            return {
                ...state,
                popularProducts: payload
            }
        case SET_ONE_PRODUCT:
            return {
                ...state,
                oneProduct: payload
            }
        default:
            return {
                ...state
            }
    }
}