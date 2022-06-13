import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"

export default function FavoriteProduct({product}) {
    const dispatch = useDispatch()
    return (
        <div className="favorite-proudct">
                <div className="favorite-product-img">
                    <img src={product.images[0].url} />
                </div>

                <div className="favorite-product-characteristic">
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
                    <button onClick={() => {dispatch({type: "DELETE_PRODUCT_FROM_FAVORITE", payload: product})}}>REMOVE FROM FAVORITE</button>
                </div>
        </div>
    )
}