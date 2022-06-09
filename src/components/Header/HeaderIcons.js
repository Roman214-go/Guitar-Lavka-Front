import { Link } from 'react-router-dom'
import iconFavorite from '../../assets/img/header-icons/favorite-icon.svg'
import iconBasket from '../../assets/img/header-icons/basket-icon.svg'
import iconFind from '../../assets/img/header-icons/find-icon.svg'

export default function HeaderIcons() {
    return (
        <div className='header-icons'>
            <img src={iconFind} />
            <Link to="/favorite"><img src={iconFavorite} /></Link>
            <Link to="/basket"><img src={iconBasket}/></Link>
        </div>
    )
}