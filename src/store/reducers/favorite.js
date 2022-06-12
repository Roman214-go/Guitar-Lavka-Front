import { ADD_PRODUCT_TO_FAVORITE, DELETE_PRODUCT_FROM_FAVORITE } from "../actionConstants"

const defaultState = {
    favoriteProducts: []
}

export const favorite = (state = defaultState, {type, payload}) => {
    switch(type) {
        case ADD_PRODUCT_TO_FAVORITE: 
            return {
                ...state,
                favoriteProducts: [...state.favoriteProducts, payload]
            }
        case DELETE_PRODUCT_FROM_FAVORITE:
            return {
                ...state,
                favoriteProducts: state.favoriteProducts.filter(info => info != payload)
            }
        default:
            return {
                ...state
            }
    }
}