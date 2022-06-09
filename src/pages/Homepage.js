import Mailings from "../components/Homepage/Mailings"
import PopularProducts from "../components/Homepage/PopularProducts"
import Products from "../components/Homepage/Products"
import Services from "../components/Homepage/Services"
import Slider from "../components/Homepage/Slider"
import Sponsors from "../components/Homepage/Sponsors"

export default function Homepage() {
    return (
        <>
        <Slider />
        <Products />
        <Sponsors />
        <PopularProducts />
        <Services />
        <Mailings />
        </>
    )
}