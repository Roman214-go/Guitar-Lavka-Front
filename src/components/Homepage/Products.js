import { Link } from 'react-router-dom'
import mediator from '../../assets/img/homepage/products/mediator.svg'
import { useDispatch } from 'react-redux/es/exports'

export default function Products() {
        const dispatch = useDispatch()
    return (
        <div className="homepage-products">
            
            <div className="homepage-product-ukulele homepage-product">
                    <img src={mediator}/>
                    <Link to="catalog" onClick={() => dispatch({type: "SET_PRODUCTS_FILTER_TYPE", payload: "ukulele"})}>UKULELE</Link>
            </div>  

            <div className="homepage-product-guitars homepage-product">
                    <img src={mediator}/>
                    <Link to="catalog" onClick={() => dispatch({type: "SET_PRODUCTS_FILTER_TYPE", payload: "acoustic"})}>ACOUSTIC</Link>
            </div>
            
            <div className="homepage-product-accessories homepage-product">
                    <img src={mediator}/>
                    <Link to="catalog" onClick={() => dispatch({type: "SET_PRODUCTS_FILTER_TYPE", payload: "electric"})}>ELECTRIC</Link>
            </div>
        
            <div className="homepage-product-strings homepage-product">
                    <img src={mediator}/>
                    <Link to="about">ABOUT US</Link>
            </div>

        </div>
    )
}