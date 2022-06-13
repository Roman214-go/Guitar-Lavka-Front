import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function ProductMainInfo({info}) {
    const basketState = useSelector(state => state.basket.basketProducts)
    const favoriteState = useSelector(state => state.favorite.favoriteProducts)

    const checkState = (element) => element.id == info.id
    
    const [inBasket, setInBasket] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    
    const dispatch = useDispatch()
    
    useEffect(() => {
        setInBasket(basketState.some(checkState))
        setIsFavorite(favoriteState.some(checkState))
    }, [info])

    const dispatchRemoveFromBasket = () => {
        dispatch({type: "SET_PRODUCT_BASKET_COUNT", payload: -1})
        dispatch({type: "SET_PRODUCT_BASKET_COUNT_PRICE", payload: -info.price})
        dispatch({type: "DELETE_PRODUCT_FROM_BASKET", payload: info})
    }
    const dispatchAddToBasket = () => {
        dispatch({type: "ADD_PRODUCT_TO_BASKET", payload: info})
        dispatch({type: "SET_PRODUCT_BASKET_COUNT", payload: 1})
        dispatch({type: "SET_PRODUCT_BASKET_COUNT_PRICE", payload: info.price})
    }
    const addToBasket = () => {
        setInBasket(!inBasket)
        inBasket ?
        dispatchRemoveFromBasket()
        :
        dispatchAddToBasket()
    }
    const addToFavorite = () => {
        setIsFavorite(!isFavorite)
        isFavorite ?
        dispatch({type: "DELETE_PRODUCT_FROM_FAVORITE", payload: info})
        :
        dispatch({type: "ADD_PRODUCT_TO_FAVORITE", payload: info})
    }
    return (
        <div className="productpage-main-info">
            <div className="productpage-main-info-top">
                <h3>{info.productType}</h3>
                <h2 style={{margin: "10px 0"}}>{info.name}</h2>
                <p className="productpage-main-description">{info.description}</p>
                <p style={{color: "orange", margin: "10px 0"}}>
                    {
                        info.isStock ? "In stock" : "Out of stock"
                    }
                </p>
            </div>

            <div className="productpage-main-info-bottom">
                <span style={{fontSize: "20px"}}>Price</span>
                <span>{info.price} $</span>
                <div className="productpage-main-info-buttons">
                    <button onClick={addToBasket} className={inBasket ? "productpage-active-button" : ""} disabled={info.isStock ?  false : true}>
                        {
                            inBasket ? "REMOVE FROM BASKET" : "ADD TO BASKET" 
                        }
                    </button>
                    <button onClick={addToFavorite} className={isFavorite ? "productpage-active-button" : ""}>
                        {
                            isFavorite ? "IN FAVORITE" : "ADD TO FAVORITE" 
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}