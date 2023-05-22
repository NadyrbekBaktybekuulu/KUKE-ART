import styles from "./Profile.module.css";

const Profile = () => {
    return (
        <main className={styles.main_content}>
            <div className={styles.banner_wrapper}>
                <p><img className={styles.img} src="https://www.bannerbatterien.com/upload/filecache/Banner-Batterien-Windrder2-web_06b2d8d686e91925353ddf153da5d939.webp" /></p>
            </div>

            <div className={styles.block}>
                <img className={styles.avatar} src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" />

                <div className={styles.description}>
                    <p>lorem lorem lorem lorem lorem lorem</p>
                    <p className={styles.item}>lorem</p>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </main>
    );
}

export default Profile;