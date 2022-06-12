import { ADD_PRODUCT_TO_BASKET, DELETE_PRODUCT_FROM_BASKET, SET_PRODUCT_BASKET_COUNT, SET_PRODUCT_BASKET_COUNT_PRICE } from "../actionConstants"

const defaultState = {
    basketProducts: [],
    productCount: 0,
    productCountPrice: 0,
}

export const basket = (state = defaultState, {type, payload}) => {
    switch(type) {
        case ADD_PRODUCT_TO_BASKET: 
            return {
                ...state,
                basketProducts: [...state.basketProducts, payload]
            }
        case DELETE_PRODUCT_FROM_BASKET:
            return {
                ...state,
                basketProducts: state.basketProducts.filter(info => info != payload)
            }
        case SET_PRODUCT_BASKET_COUNT:
            return {
                ...state,
                productCount: state.productCount + payload
            } 
        case SET_PRODUCT_BASKET_COUNT_PRICE:
            return {
                ...state,
                productCountPrice: state.productCountPrice + payload
            }
        default:
            return {
                ...state
            }
    }
}