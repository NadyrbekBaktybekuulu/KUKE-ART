import styles from "./Settings.module.css";

const Settings = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.setItem}>
                Menu
            </div>
            <div className={styles.setItem}>
                Audio
            </div>
            <div className={styles.setItem}>
                Lorem, ipsum.
            </div>
            <div className={styles.setItem}>
                Lorem, ipsum dolor.
            </div>
        </div>
    );
};

export default Settings;