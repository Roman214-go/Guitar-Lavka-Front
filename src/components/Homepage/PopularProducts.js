import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useEffect } from "react";
import { getPopularProducts } from "../../store/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import OneProduct from "./OneProduct";

export default function PopularProducts() {
    const dispatch = useDispatch()
    const popularProducts = useSelector(state => state.products.popularProducts)
    useEffect(() => {
        dispatch(getPopularProducts())
    }, [])
    if (popularProducts == "error") {
        return null
    }
    return (
        <div className="homepage-poular-products">
            <h2>Popular products<div></div></h2>
            <Swiper
            slidesPerView={4}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="popular-swiper"
            >
            {
                popularProducts && popularProducts.length != 0 ? popularProducts.products.map(product => (
                    <SwiperSlide key={product.id} id={product.id}>
                        <OneProduct product={product}/>
                    </SwiperSlide>
                )) : ""
            }

        </Swiper>
        </div>
    )
}