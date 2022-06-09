import Delivery from "../components/Delivery/Delivery";

export default function Deliverypage() {
    return (
        <div className="deliverypage-cont">
                <h2>DELIVERY</h2>
                <Delivery name="SELF-CALL" time="Working everyday from 10:00 to 20:00" price="Free" description="Get in shop at White House"/>
                <Delivery name="BOXBERRY" time="From 3 days" price="from 2.5 $" description="Delivery to the point of issue Boxberry"/>
                <Delivery name="SDACK" time="From 3 days" price="from 4 $" description="Delivery of the point of issue or specified to the address with the possibility of payment upon receipt."/>
                <Delivery name="WORLD-DELIVERY" time="From 3 days" price="From 2 $" description="Ordinary postage. Ground shipping across Russia with low weight tariff"/>
        </div>
    )
}