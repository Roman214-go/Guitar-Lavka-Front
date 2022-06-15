import FooterBlock from "./FooterBlock";
import FooterLeft from "./FooterLeft";
import { useDispatch } from "react-redux" 
import { Link } from "react-router-dom";

export default function Footer() {
    const dispatch = useDispatch()    
    const serviceListArray = [{name: "Payment", link: "delivery"}, {name: "Guarantee", link: "delivery"}, {name: "Delivery", link: "delivery"}]
    const servicesListArray = [{name: "Repearing", link: "services"}, {name: "Online selection", link: "delivery"}, {name: "Trainee", link: "teaching"}]
    return (
        <footer>
            <div className="footer-main">
                <div className="footer-left">
                    <FooterLeft />
                </div>
                <div className="footer-right">
                <div className="footer-block">
                    <h2>Catalog</h2>
                            <Link to="catalog" className="footer-links" onClick={() => dispatch({type: "SET_PRODUCTS_FILTER_TYPE", payload: "acoustic"})}>Acoustic</Link>
                            <Link to="catalog" className="footer-links" onClick={() => dispatch({type: "SET_PRODUCTS_FILTER_TYPE", payload: "electric"})}>Electric</Link>
                            <Link to="catalog" className="footer-links" onClick={() => dispatch({type: "SET_PRODUCTS_FILTER_TYPE", payload: "ukulele"})}>Ukulele</Link>
                </div>
                    <FooterBlock title="Service" list={serviceListArray}/>
                    <FooterBlock title="Services" list={servicesListArray}/>
                </div>
            </div>
            <p style={{color: "rgb(175, 173, 173)", textAlign: "center", fontSize: "14px", margin: "25px 0"}}>© 2021 GuitarLavka - music store Privacy Policy</p>
        </footer>

    )
}