import styles from "./Header.module.css";

const Header = (props) => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src="../../../logo.png" alt="logo" />
        </div>
    );
};

export default Header;