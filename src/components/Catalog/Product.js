import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { GrFormNext, GrFormPrevious } from "react-icons/gr" 
import { MdLastPage, MdFirstPage } from "react-icons/md"
import { useEffect } from "react"

const Product = ({products: {products, countProducts}}) => {
    const currentPage = useSelector(state => state.catalogSort.page)
    const dispatch = useDispatch()    
    let pagePagination = new Array(Math.ceil(countProducts/16)).fill().map((_, idx) => 1 + idx)
    const changePage = (e) => {
        dispatch({type: "SET_PRODUCTS_SORT_PAGE", payload: e.target.innerText})
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentPage])
    return (
        <div className="catalog-products-cont">
            <div className="products-cont">
                {
                    products.map(product => (
                        <div className="product" id={product.id} key={product.id}>
                            <Link to={`${product.id}`}>
                            <img src={product.image} style={{width: "230px", height: "300px"}}/>
                            <div className="product-info">
                                <span style={{fontSize: "10px"}} className="product-type">{product.productType}</span>
                                <span className="product-name">{product.name}</span>
                                <span style={{fontSize: "14px", marginTop: "10px"}}>{product.price} $</span>
                            </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className="products-paging">
                <MdFirstPage onClick={() => dispatch({type: "SET_PRODUCTS_SORT_PAGE", payload: 1})} />
                <GrFormPrevious onClick={() => dispatch(currentPage != 1 ? {type: "SET_PRODUCTS_SORT_PAGE", payload: currentPage-1} : null)} />
                {
                    pagePagination.map((item) => (
                        <span key={item} onClick={changePage} className={currentPage == item ? "product-page-active" : ""}>{item}</span>
                    ))
                }
                <GrFormNext onClick={() => currentPage < pagePagination.length ? dispatch({type: "SET_PRODUCTS_SORT_PAGE", payload: currentPage + 1}) : null} />
                <MdLastPage onClick={() => dispatch({type: "SET_PRODUCTS_SORT_PAGE", payload: pagePagination.length})}/>
            </div>
        </div>
    )
}
export default Product