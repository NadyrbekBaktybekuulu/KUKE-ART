import styles from './Banner.module.css';

const Banner = () => {
    return (
        <div className={styles.banner_wrapper}>
            <p><img className={styles.img} src="https://www.bannerbatterien.com/upload/filecache/Banner-Batterien-Windrder2-web_06b2d8d686e91925353ddf153da5d939.webp" /></p>
        </div>
    );
};

export default Banner;