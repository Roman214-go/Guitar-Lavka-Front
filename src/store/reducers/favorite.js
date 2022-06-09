import { ADD_PRODUCT_TO_FAVORITE, DELETE_PRODUCT_FROM_FAVORITE } from "../actionConstants"

const defaultState = {
    favoriteProducts: []
}

export const basket = (state = defaultState, {type, payload}) => {
    switch(type) {
        case ADD_PRODUCT_TO_FAVORITE: 
            return {
                ...state,
                basketProducts: [...state.basketProducts, payload]
            }
        case DELETE_PRODUCT_FROM_FAVORITE:
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