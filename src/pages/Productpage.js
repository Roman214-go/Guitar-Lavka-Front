import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Loader from "../components/Loader"
import ProductpageCont from "../components/Productpage/ProductpageCont"
import { GET_ONE_PRODUCT } from "../store/actionConstants"
import { getOneProduct } from "../store/actions/productsActions"

export default function Productpage() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.products.oneProduct)    
    useEffect(() => {
        dispatch(getOneProduct({
            type: GET_ONE_PRODUCT,
            payload: id
        }))
    }, [])
    return (
        <>
            {
                product && product.length != 0  ? <ProductpageCont product={product} id={id}/> : <Loader />         
            }
        </>
    )
}