import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div className={styles.navbar}>
            <NavLink to="/Profile"
                className={
                    ({ isActive }) => isActive ? styles.activeLink : undefined
                }>profile
            </NavLink>

            <NavLink to="/Dialogs"
                className={
                    ({ isActive }) => isActive ? styles.activeLink : undefined
                }>Dialogs
            </NavLink>

            <NavLink to="/News"
                className={
                    ({ isActive }) => isActive ? styles.activeLink : undefined
                }>News
            </NavLink>

            <NavLink to="/Music"
                className={
                    ({ isActive }) => isActive ? styles.activeLink : undefined
                }>Music
            </NavLink>

            <NavLink to="/Settings"
                className={
                    ({ isActive }) => isActive ? styles.activeLink : undefined
                }>Settings
            </NavLink>
        </div>
    );
};

export default Navbar;
