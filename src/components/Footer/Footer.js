import FooterBlock from "./FooterBlock";
import FooterLeft from "./FooterLeft";

export default function Footer() {
    const catalogListArray = [{name: "Guitar", link: "catalog"}, {name: "Ukulele", link: "catalog"}, {name: "Accessories", link: "catalog"}, {name: "Strings", link: "catalog"}]
    const serviceListArray = [{name: "Payment", link: "delivery"}, {name: "Guarantee", link: "delivery"}, {name: "Delivery", link: "delivery"}]
    const servicesListArray = [{name: "Repearing", link: "services"}, {name: "Online selection", link: "delivery"}, {name: "Trainee", link: "teaching"}]
    return (
        <footer>
            <div className="footer-main">
                <div className="footer-left">
                    <FooterLeft />
                </div>
                <div className="footer-right">
                    <FooterBlock title="Catalog" list={catalogListArray}/>
                    <FooterBlock title="Service" list={serviceListArray}/>
                    <FooterBlock title="Services" list={servicesListArray}/>
                </div>
            </div>
            <p style={{color: "rgb(175, 173, 173)", textAlign: "center", fontSize: "14px", margin: "25px 0"}}>© 2021 GuitarLavka - music store Privacy Policy</p>
        </footer>

    )
}