import ProductImages from "./ProductImages";
import ProductAdditionalInfo from "./ProductAdditionalInfo";
import ProductMainInfo from "./ProductMainInfo";

export default function ProductpageCont({product, id}) {
    return (
        <>
            <div className="productpage-main-info-cont">
                <ProductImages images={product}/>
                <ProductMainInfo info={product} id={id}/>
            </div>
            <ProductAdditionalInfo info={product}/>
        </>
    )
}