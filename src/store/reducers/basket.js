import { ADD_PRODUCT_TO_BASKET, DELETE_PRODUCT_FROM_BASKET } from "../actionConstants"

const defaultState = {
    basketProducts: []
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
                basketProducts: state.basketProducts.filter(id => id != payload)
            } 
        default:
            return {
                ...state
            }
    }
}