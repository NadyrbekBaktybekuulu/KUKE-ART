import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav_menu}>
            <ul>
                <li><a className={styles.item} href="#">Profile</a></li>
                <li><a className={styles.item} href="#">Messages</a></li>
                <li><a className={styles.item} href="#">News</a></li>
                <li><a className={`${styles.item} ${styles.active}`} href="#">Music</a></li>
                <li><a className={styles.item} href="#">Settings</a></li> 
            </ul>
        </nav>
    )
}

export default Nav;