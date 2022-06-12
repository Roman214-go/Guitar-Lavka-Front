import { useSelector } from "react-redux"
import Product from "./Product"

export default function ChoosedProducts() {
    const productsInBasket = useSelector(state => state.basket.basketProducts)
    if (!productsInBasket || productsInBasket.length == 0) {
        return null
    }
    console.log(productsInBasket);
    return (
        <div className="basket-all-products">

            <div className="basket-info">
                <p>PRODUCT NAME</p>
                <p>AMOUNT</p>
                <p>PRICE</p>
            </div>
            {
                productsInBasket.map((item, index) => (    
                    
                    <Product product={item} key={index} />
                ))
            }
        </div>
    )
}