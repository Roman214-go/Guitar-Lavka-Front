import { Link } from "react-router-dom"

const OneProduct = ({product}) => {
    return (
        <div className="product" id={product.id}>
            <Link to={`catalog/${product.id}`}>
                <img src={product.image} style={{width: "230px", height: "300px"}}/>
                <div className="product-info">
                    <span style={{fontSize: "10px"}} className="product-type">{product.productType}</span>
                    <span style={{fontSize: "16px"}} className="product-name">{product.name}</span>
                    <span style={{fontSize: "14px", marginTop: "10px"}}>{product.price} $</span>
                </div>
            </Link>
        </div>
    )
}

export default OneProduct