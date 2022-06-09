import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function ProductMainInfo({info: {name, productType, description, isStock, price}, id}) {
    const basketState = useSelector(state => state.basket.basketProducts)
    
    const [inBasket, setInBasket] = useState(basketState.includes(id))
    const [isFavorite, setIsFavorite] = useState(false)
    const dispatch = useDispatch()
    
    const addToBasket = () => {
        setInBasket(!inBasket)
        inBasket ?
        dispatch({type: "DELETE_PRODUCT_FROM_BASKET", payload: id})
        :
        dispatch({type: "ADD_PRODUCT_TO_BASKET", payload: id})
        
        
    }
    const addToFavorite = () => {
        setIsFavorite(!isFavorite)
        isFavorite ?
        dispatch({type: "DELETE_PRODUCT_FROM_FAVORITE", payload: id})
        :
        dispatch({type: "ADD_PRODUCT_TO_FAVORITE", payload: id})
    }
    return (
        <div className="productpage-main-info">
            <div className="productpage-main-info-top">
                <h3>{productType}</h3>
                <h2 style={{margin: "10px 0"}}>{name}</h2>
                <p className="productpage-main-description">{description}</p>
                <p style={{color: "orange", margin: "10px 0"}}>
                    {
                        isStock ? "In stock" : "Out of stock"
                    }
                </p>
            </div>

            <div className="productpage-main-info-bottom">
                <span style={{fontSize: "20px"}}>Price</span>
                <span>{price} $</span>
                <div className="productpage-main-info-buttons">
                    <button onClick={addToBasket} className={inBasket ? "productpage-active-button" : ""}>
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