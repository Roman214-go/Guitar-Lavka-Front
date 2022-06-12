import { SET_ALL_PRODUCTS, SET_ONE_PRODUCT, SET_POPULAR_PRODUCTS } from "../actionConstants"

const defaultState = {
    allProducts: [],
    popularProducts: [],
    oneProduct: [],
    numOfProducts: 0,
    
}

export const products = (state = defaultState, {type, payload}) => {
    switch(type) {
        case SET_ALL_PRODUCTS:
            console.log(payload);
        return {
                ...state,
                allProducts: payload,
                numOfProducts: payload.countProducts,
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