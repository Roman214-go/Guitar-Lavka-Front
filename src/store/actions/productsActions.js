import { GET_ALL_PRODUCTS, GET_ONE_PRODUCT, GET_POPULAR_PRODUCTS, GET_PRODUCTS_SORT_SETTINGS, SET_ALL_PRODUCTS, SET_ONE_PRODUCT, SET_POPULAR_PRODUCTS } from "../actionConstants"

const setProducts = (list) => {
    return {
        type: SET_ALL_PRODUCTS,
        payload: list,
    }
}

const setPopularProducts = (list) => {
    return {
        type: SET_POPULAR_PRODUCTS,
        payload: list
    }
}

const getAllProducts = (sortSettings) => {
    return {
        type: GET_ALL_PRODUCTS,
        payload: sortSettings
    }
}

const getPopularProducts = () => {
    return {
        type: GET_POPULAR_PRODUCTS
    }
}

const getOneProduct = (id) => {
    return {
        type: GET_ONE_PRODUCT,
        payload: id
    }
}

const setOneProduct = (product) => {
    return {
        type: SET_ONE_PRODUCT,
        payload: product
    }
}

export { 
    setProducts,
    getAllProducts,
    getPopularProducts,
    setPopularProducts,
    getOneProduct,
    setOneProduct
}