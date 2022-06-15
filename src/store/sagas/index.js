import { fork, takeEvery, put, call } from 'redux-saga/effects';
import { GET_ALL_PRODUCTS, GET_ONE_PRODUCT, GET_POPULAR_PRODUCTS } from "../actionConstants";
import { getOneProduct, getAllProducts, getPopularProducts } from "../../api/index";
import { setProducts, setOneProduct, setPopularProducts } from "../actions/productsActions";

export function* workerAllProducts({payload: {type, sortAsc, sortType, page, isStock}}) {
    const paramUrl = `&Page=${page}${type ? `&Type=${type}` : ""}${sortType !== "" ? `&Sort.Sort_Asc=${sortAsc}&Sort.Type=${sortType}` : ""}${isStock? `&IsStock=${isStock}` : ""}`
    const data = yield call(getAllProducts, `Product/Paging?Count=16${paramUrl}`)
    yield put(setProducts(data))
}

export function* workerOneProduct({payload: {payload}}) {
    const data = yield call(getOneProduct, `Product/${payload}`)
    yield put(setOneProduct(data))
}

export function* workerPopularProducts() {
    const data = yield call(getPopularProducts, 'Product/Paging?Count=10&Page=1&Sort.Sort_Asc=true&Sort.Type=popularity')
    yield put(setPopularProducts(data))    
}

export function* productsPopularWorker() {
    yield fork(workerPopularProducts)
}

export function* productsAllWorker(action) {
    yield fork(workerAllProducts, action)
}

export function* productWorker(action) {
    yield fork(workerOneProduct, action)
}

export function* watchProducts() {
    yield takeEvery(GET_POPULAR_PRODUCTS, productsPopularWorker)
    yield takeEvery(GET_ALL_PRODUCTS, productsAllWorker)
    yield takeEvery(GET_ONE_PRODUCT, productWorker)
}

export default function* rootSaga() {
    yield watchProducts()
}