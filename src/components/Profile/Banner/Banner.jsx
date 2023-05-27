import styles from "./Banner.module.css";

const Banner = () => {
    return (
        <div className={styles.bannerWrapper}>
            <img className={styles.banner} src="../../../banner.jpg" alt="Banner" />
        </div>
    )
}

export default Banner;