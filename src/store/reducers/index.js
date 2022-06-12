import { combineReducers } from "redux";
import { catalogSort } from "./catalogFilter";
import { products } from "./product";
import { basket } from "./basket"
import { favorite } from "./favorite"

export const reducer = combineReducers({
    products,
    catalogSort,
    basket,
    favorite
})