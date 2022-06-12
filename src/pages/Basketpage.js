import { useSelector } from "react-redux";
import ChoosedProducts from "../components/Basket/ChoosedProducts";
import EmptyBasket from "../components/Basket/EmptyBasket";
import TotalInfo from "../components/Basket/TotalInfo";

export default function Basketpage() {
    const basketState = useSelector(state => state.basket.basketProducts)
    if (!basketState || basketState.length == 0) {
        return (
            <EmptyBasket />
        )
    }
    return (
        <div className="basketpage">
            <ChoosedProducts />
            <TotalInfo />
        </div>
    )
}