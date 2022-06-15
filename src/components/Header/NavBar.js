import { NavLink } from "react-router-dom";

const setActiveNav = ({isActive}) => isActive ? 'active-nav-link' : ''

export default function NavBar() {
    return (
        <nav>
            <NavLink to='/catalog' className={setActiveNav}>Catalog</NavLink>
            <NavLink to='/services' className={setActiveNav}>Services</NavLink>
            <NavLink to='/about' className={setActiveNav}>About us</NavLink>
            <NavLink to='/delivery' className={setActiveNav}>Delivery</NavLink>
            <NavLink to='/teaching' className={setActiveNav}>Teaching</NavLink>
            <NavLink to='/contacts' className={setActiveNav}>Contacts</NavLink>
        </nav>
    )
}