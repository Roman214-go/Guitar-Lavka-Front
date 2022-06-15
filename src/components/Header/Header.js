import NavBar from "./NavBar";
import { Link } from "react-router-dom"
import HeaderIcons from "./HeaderIcons";
import logo from '../../assets/img/logo.png'

export default function Header() {
    return (
        <header>
            <Link to="/"><img src={logo} alt="logo" width="130px" height="50px"/></Link>
            <NavBar />
            <HeaderIcons />
        </header>
    )
}