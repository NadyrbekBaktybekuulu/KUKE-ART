import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="../../../../banner.jpg" alt="Banner" className={styles.banner} />
            </div>
            <div>
                description + ava
            </div>

        </div>
    );
};

export default ProfileInfo;