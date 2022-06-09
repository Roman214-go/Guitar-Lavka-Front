import { Link } from 'react-router-dom'
import mediator from '../../assets/img/homepage/products/mediator.svg'

export default function Products() {
    return (
        <div className="homepage-products">
            
        
            
            <div className="homepage-product-ukulele homepage-product">
                    <img src={mediator}/>
                    <Link to="catalog">UKULELE</Link>
            </div>  

            <div className="homepage-product-guitars homepage-product">
                    <img src={mediator}/>
                    <Link to="catalog">ACOUSTIC</Link>
            </div>
            
            <div className="homepage-product-accessories homepage-product">
                    <img src={mediator}/>
                    <Link to="catalog">ELECTRIC</Link>
            </div>
        
            <div className="homepage-product-strings homepage-product">
                    <img src={mediator}/>
                    <Link to="about">ABOUT US</Link>
            </div>

           
          
        </div>
    )
}