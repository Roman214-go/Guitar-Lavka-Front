import { combineReducers } from "redux";
import { catalogSort } from "./catalogFilter";
import { products } from "./product";
import { basket } from "./basket"

export const reducer = combineReducers({
    products,
    catalogSort,
    basket
})