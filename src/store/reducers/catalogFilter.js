import { SET_PRODUCTS_FILTER_STOCK, SET_PRODUCTS_FILTER_TYPE, SET_PRODUCTS_SORT_ASC, SET_PRODUCTS_SORT_PAGE, SET_PRODUCTS_SORT_TYPE } from "../actionConstants"

const defaultState = {
    page: 1,
    type: "",
    sortAsc: "",
    sortType: "",
    isStock: "",
}

export const catalogSort = (state = defaultState, {type, payload}) => {
    switch(type) {
        case SET_PRODUCTS_SORT_ASC:
            return {
                ...state,
                sortAsc: payload                                
            }
        case SET_PRODUCTS_SORT_TYPE:
            return {
                ...state,
                sortType: payload                                
            }
        case SET_PRODUCTS_FILTER_STOCK: 
            return {
                ...state,
                isStock: payload 
            }
        case SET_PRODUCTS_FILTER_TYPE:
            return {
                ...state,
                type: payload
            }
        case SET_PRODUCTS_SORT_PAGE: 
            return {
                ...state,
                page: payload
            }
        default:
            return {
                ...state
            }
    }
}