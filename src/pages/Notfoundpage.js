import { Link } from "react-router-dom";

export default function Notfoundpage() {
    return (
        <div className="not-found-cont">
            <p>Congrats you discoverd a new part of internet</p>
            <div className="error-cont">
                <span>4</span>
                <span className="middle-not-found">0</span>
                <span>4</span>
            </div>
            <p>Go <Link to="/" style={{fontSize: "inherit", color: "rgb(180, 175, 175)"}}>home</Link> and tell everyone about it</p>
        </div>
    )
}