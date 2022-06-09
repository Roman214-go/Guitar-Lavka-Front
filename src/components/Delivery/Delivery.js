export default function Delivery({name, time, price, description}) {
    return (
        <div className="delivery-type-cont">
            <h3>{name}</h3>
                <div className="delivery-type">
                    <div className="delivery-terms">
                        <h4>TERMS</h4>
                        <p>{time}</p>
                    </div>
                    <div className="delivery-price">
                        <h4>PRICE</h4>
                        <p>{price}</p>
                    </div>
                    <div className="delivery-description">
                        <h4>DESCRIPTION</h4>
                        <p>{description}</p>
                    </div>
            </div>
        </div>
    )
}