import { Link } from "react-router-dom";
import { GrBasket } from "react-icons/gr"

export default function EmptyBasket() {
    return (
        <div className="basket-empty">
            <p>Your shopping cart is empty, go to the <Link to="/catalog">catalog</Link> to find your perfect tool</p>
            <GrBasket className="basket-empty-anim"/>
        </div>
    )
}