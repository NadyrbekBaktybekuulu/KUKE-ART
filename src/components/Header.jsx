import styles from "./Header.module.css";


const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src='https://1000logos.net/wp-content/uploads/2016/10/Batman-Logo-1939.png' />
        </header>
    )
}

export default Header;