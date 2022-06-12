import { useSelector } from "react-redux"

export default function TotalInfo() {
    const totalAmount = useSelector(state => state.basket.productCount)
    const totalPrice = useSelector(state => state.basket.productCountPrice)
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
            <button>PROCCED TO CHECKOUT</button>
            </div>
        </div>
    )
}