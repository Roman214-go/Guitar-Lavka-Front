import { HiPlus, HiMinus } from "react-icons/hi"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Product({product: {images, name, characteristic, price, id}}) {
    const [numOfProduct, setNumOfProduct] = useState(1)
    const a = useSelector(state => state.basket.productCount)
    console.log(a);
    const dispatch = useDispatch()
    const decrease = () => {
        if (numOfProduct != 1) {
            setNumOfProduct(numOfProduct - 1)
            dispatch({type: "SET_PRODUCT_BASKET_COUNT", payload: -1})
            dispatch({type: "SET_PRODUCT_BASKET_COUNT_PRICE", payload: price})
        }        
    }
    const increase = () => {
        setNumOfProduct(numOfProduct + 1)
        dispatch({type: "SET_PRODUCT_BASKET_COUNT", payload: 1})
        dispatch({type: "SET_PRODUCT_BASKET_COUNT_PRICE", payload: price})
    }
    return (
        <div className="basket-product">
            <div className="basket-product-info">
                <div className="basket-product-img">
                    <img src={images[0].url} />
                </div>

                <div className="basket-product-characteristic">
                    <Link to={`/catalog/${id}`} >{name}</Link>
                    <ul>
                        <li>{characteristic[0]}</li>
                        <li>{characteristic[1]}</li>
                        <li>{characteristic[2]}</li>
                        <li>{characteristic[3]}</li>
                        <li>{characteristic[4]}</li>
                        <li>{characteristic[5]}</li>
                        <li>{characteristic[6]}</li>
                    </ul>
                </div>
            </div>
            <div className="basket-product-counter">
                <HiMinus onClick={decrease}/>
                <p>{numOfProduct}</p>
                <HiPlus onClick={increase}/>
            </div>
            <div className="basket-product-price">
                <p>{price * numOfProduct} $</p>
            </div>
        </div>
    )
}