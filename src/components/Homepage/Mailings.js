import send from "../../assets/img/homepage/send.png"
export default function Mailings() {
    const handleClick = e => {
        e.preventDefault()
    }
    return (
        <div className="homepage-mailings-container">
            <div className="homepage-mailings">
                <p>JOIN THE CLUB</p>
                <h1>GUITAR LAVKA</h1>
                <span>Helpful emails about tools and events</span>
                <form onClick={handleClick}>
                    <input type="email" placeholder="Your email..."/>
                    <button><img src={send}/></button>
                </form>
                <a href="https://policies.google.com/privacy?hl=ru" target="_blank">I consent to the processing of my personal data</a>
            </div>
        </div>
    )
}