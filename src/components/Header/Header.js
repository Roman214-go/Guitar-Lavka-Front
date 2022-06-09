import NavBar from "./NavBar";
import { Link } from "react-router-dom"
import HeaderIcons from "./HeaderIcons";
import logo from '../../assets/img/logo.png'

export default function Header() {
    return (
        <header>
            <Link to="/">Home</Link>
            <NavBar />
            <HeaderIcons />
        </header>
    )
}