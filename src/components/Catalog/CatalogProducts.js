import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../store/actions/productsActions"
import Loader from "../Loader"
import NotFoundProducts from "./NotFoundProducts"
import Product from "./Product"

export default function CatalogProducts() {
    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products.allProducts)
    const type = useSelector(state => state.catalogSort.type)
    const sortAsc = useSelector(state => state.catalogSort.sortAsc)
    const sortType = useSelector(state => state.catalogSort.sortType)
    const isStock = useSelector(state => state.catalogSort.isStock)
    const page = useSelector(state => state.catalogSort.page)
    useEffect(() => {
        dispatch(getAllProducts({type, sortAsc, sortType, isStock, page}))
    }, [type, sortAsc, sortType, isStock, page])

    if (allProducts == "error") {
        return (
            <div className="catalog-not-found">
                <NotFoundProducts />
            </div>
        )
    }

    return (
        <div>
            {
                allProducts && allProducts.length != 0 ? <Product products={allProducts} title="All Products"/> : <Loader />
            }
        </div>
    )
}