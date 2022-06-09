import { Link } from "react-router-dom"

export default function FooterBlock({title, list}) {
    return (
        <div className="footer-block">
            <h2>{title}</h2>
            {
                list.map((list, index) => (
                    <Link to={list.link} key={index} className="footer-links">{list.name}</Link>
                ))
            }
        </div>
    )
}