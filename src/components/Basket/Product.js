import { HiPlus, HiMinus } from "react-icons/hi"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

export default function Product({product}) {
    const [numOfProduct, setNumOfProduct] = useState(1)
    const dispatch = useDispatch()
    const decrease = () => {
        dispatch({type: "SET_PRODUCT_BASKET_COUNT", payload: -1})
        if (numOfProduct != 1) {
            setNumOfProduct(numOfProduct - 1)
            dispatch({type: "SET_PRODUCT_BASKET_COUNT_PRICE", payload: -product.price})
        }
        else {
            dispatch({type: "DELETE_PRODUCT_FROM_BASKET", payload: product})
        }        
    }
    const increase = () => {
        setNumOfProduct(numOfProduct + 1)
        dispatch({type: "SET_PRODUCT_BASKET_COUNT", payload: 1})
        dispatch({type: "SET_PRODUCT_BASKET_COUNT_PRICE", payload: product.price})
    }
    return (
        <div className="basket-product">
            <div className="basket-product-info">
                <div className="basket-product-img">
                    <img src={product.images[0].url} />
                </div>

                <div className="basket-product-characteristic">
                    <Link to={`/catalog/${product.id}`} >{product.name}</Link>
                    <ul>
                        <li>{product.characteristic[0]}</li>
                        <li>{product.characteristic[1]}</li>
                        <li>{product.characteristic[2]}</li>
                        <li>{product.characteristic[3]}</li>
                        <li>{product.characteristic[4]}</li>
                        <li>{product.characteristic[5]}</li>
                        <li>{product.characteristic[6]}</li>
                    </ul>
                </div>
            </div>
            <div className="basket-product-counter">
                <HiMinus onClick={decrease}/>
                <p>{numOfProduct}</p>
                <HiPlus onClick={increase}/>
            </div>
            <div className="basket-product-price">
                <p>{product.price * numOfProduct} $</p>
            </div>
        </div>
    )
}