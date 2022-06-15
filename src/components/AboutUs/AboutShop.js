import shop1 from "../../assets/img/about/about1.png"
import shop2 from "../../assets/img/about/about2.png"
import shop3 from "../../assets/img/about/about3.png"
import shop4 from "../../assets/img/about/about4.png"

export default function AboutShop() {
    return (
    <div className="about-shop-cont">
        <div className="about-shop-left">
            <h2>How to reach us?</h2>
            <p>Bus: 1, 37, 67</p>
            <p>Trolleybus: 12, 17, 20</p>
            <p>Shuttle taxi: 46, 126c, 126b, 410a</p>
            <h4>By public transport</h4>
            <p>Get off at the stop "Metro Moskovskaya",
             go straight along the Moscow highway 200 meters
             (towards the Caravan market), cross the road
             through the underpass, and you find yourself right
             in front of the shopping center "Power of Sport", go up to the second floor,
             go to the end of the corridor and the first section to the right
             (landmark elevators and cinema bar)
             You're at the place!</p>
            <h4>By car</h4>
            <p>If you are driving from the city, then turn to the parking lot of the shopping center "Vertical" (landmark statue of a horse), park,
             and find yourself right in front of the shopping center "Vertical",
             go up to the second floor, go to the end of the corridor
             and the first section on the left
             (landmark cinema bar)
             You're at the place!</p>
        </div>
        <div className="about-shop-right">
            <img src={shop1} alt="shop"/>
            <img src={shop2} alt="shop"/>
            <img src={shop3} alt="shop"/>
            <img src={shop4} alt="shop"/>
        </div>
    </div>
    )
}