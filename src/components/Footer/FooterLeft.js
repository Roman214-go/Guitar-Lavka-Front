import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo-white.svg'
export default function FooterLeft() {
    return (
        <>
            <Link to="/"><img src={logo} alt="logo" width="50%"/></Link>
            <p style={{width: "60%"}}>We work throughout all world, so we can make an online show tool and deliver it to your door.</p>
            <div className="footer-inforamtion-block">
                <p>Have any questions?</p>
                <span>8 (800) 555 35 35</span>
            </div>
            <div className="footer-inforamtion-block">
                <p>Everyday 9:00 - 21:00</p>
                <span>guitarlavka@lavka.com</span>
            </div>
        </>
    )
}