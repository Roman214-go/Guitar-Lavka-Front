import { Link } from 'react-router-dom'
import iconFavorite from '../../assets/img/header-icons/favorite-icon.svg'
import iconBasket from '../../assets/img/header-icons/basket-icon.svg'
import { useSelector } from "react-redux"


export default function HeaderIcons() {
    const amountFavorite = useSelector(state => state.favorite.favoriteProducts.length)
    const amountBasket = useSelector(state => state.basket.productCount)
    return (
        <div className='header-icons'>
            <Link to="/favorite"><img src={iconFavorite} />
            {
            amountFavorite > 0 ? 
            <div className='header-count'><span >{amountFavorite}</span></div> : "" 
            } 
            </Link>
            <Link to="/basket"><img src={iconBasket}/>
            {
            amountBasket > 0 ? 
            <div className='header-count'><span >{amountBasket}</span></div> : "" 
            }
            </Link>
        </div>
    )
}