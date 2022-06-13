import { useSelector } from "react-redux"
import EmptyFavorite from "../components/Favorite/EmptyFavorite"
import FavoriteProduct from "../components/Favorite/FavoriteProduct"


export default function Favoritepage() {
    const favoriteProducts = useSelector(state => state.favorite.favoriteProducts)
    if (!favoriteProducts || favoriteProducts.length == 0) {
        return (
            <EmptyFavorite />
        )
    }
    return (
        <div className="favorite-products-cont">
            {
                favoriteProducts.map(product => (
                    <FavoriteProduct product={product} key={product.id}/>
                ))
            }
        </div>
    )
}