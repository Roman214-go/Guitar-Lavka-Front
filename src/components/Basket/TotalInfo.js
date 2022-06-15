import { useState } from "react"
import { useSelector } from "react-redux"
import BasketModal from "./BasketModal"

export default function TotalInfo() {
    const totalAmount = useSelector(state => state.basket.productCount)
    const totalPrice = useSelector(state => state.basket.productCountPrice)
    const [moadalActive, setModalActive] = useState(false)
    return (
        <div>
            <div className="basket-total-cont">
            <div className="basket-total-info-cont">
                <h3>TOTAL AMOUNT</h3>
                <div className="basket-total-info">
                    <p>Total:</p>
                    <p>{totalAmount} pcs.</p>
                </div>
                <div className="basket-total-info">
                    <p>Total price:</p>
                    <p>{totalPrice} $</p>
                </div>
            </div>
            <button onClick={() => setModalActive(true)}>PROCCED TO CHECKOUT</button>
            </div>
            <BasketModal active={moadalActive} setActive={setModalActive}/>
        </div>
    )
}