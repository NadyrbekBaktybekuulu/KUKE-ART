import User from "../Friends/User/User";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {

    let active = ({ isActive }) => isActive ? styles.activeLink : undefined;

    return (
        <div className={styles.navbar}>

            <NavLink to="/Profile" className={active} > profile </NavLink>
            <NavLink to="/Dialogs" className={active} > Dialogs </NavLink>
            <NavLink to="/News" className={active} > News </NavLink>
            <NavLink to="/Music" className={active} > Music </NavLink>
            <NavLink to="/Settings" className={active} > Settings </NavLink>
            <NavLink to="/Friends" className={active + " " + styles.indent} > Friends </NavLink>

            <div className={styles.usersSect}>
            <User />
            <User />
            <User />
            </div>
            
        </div>
    );
};

export default Navbar;
