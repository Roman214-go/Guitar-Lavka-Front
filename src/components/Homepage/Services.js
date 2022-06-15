import { useState } from "react"
import { Link } from "react-router-dom"

export default function Services() {
    const [hoverTrainee, setHoverTrainee] = useState(false)
    const [hoverReparing, setHoverReparing] = useState(false)
    const [hoverDelivery, setHoverDelivery] = useState(false)
    
    return (
        <div className="homepage-services" >
            <h2>Services<div></div></h2>
            <div className="homepage-services-container" >

                <div className="homepage-service-trainee homepage-service-container"  onMouseEnter={() => setHoverTrainee(true)} onMouseLeave={() => setHoverTrainee(false)}>
                    <div className="homepage-service-info">
                        <p>With the help of our lessons and wonderful teachers, you can easily improve your musical abilities.</p>
                        <Link to="/teaching"><h3>{hoverTrainee ? "MORE..." : "TRAINEE"}</h3></Link>
                    </div>
                </div>

                <div className="homepage-service-delivery homepage-service-container" onMouseEnter={() => setHoverDelivery(true)} onMouseLeave={() => setHoverDelivery(false)}>
                    <div className="homepage-service-info">
                        <p>Our store offers delivery to any place in the world, while the price does not bite</p>
                        <Link to="/delivery"><h3>{hoverDelivery ? "MORE..." : "DELIVERY"}</h3></Link>
                    </div>
                </div>

                <div className="homepage-service-reparing homepage-service-container" onMouseEnter={() => setHoverReparing(true)} onMouseLeave={() => setHoverReparing(false)}>
                    <div className="homepage-service-info">
                        <p>We can customize any of your instruments thanks to our amazing music engineers.</p>
                        <Link to="/services"><h3>{hoverReparing ? "MORE..." : "RESTOVRATION"}</h3></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}