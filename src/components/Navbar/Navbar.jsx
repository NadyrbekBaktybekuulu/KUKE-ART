import styles from "./Navbar.module.css";

const Navbar = (props) => {
    return (
        <div className={styles.navbar}>
            <a href="/Profile">profile </a>
            <a href="/Dialogs">Dialogs </a>
            <a href="/News">News </a>
            <a href="/Music">Music </a>
            <a href="/Settings">Settings </a>
        </div>
    );
};

export default Navbar;
