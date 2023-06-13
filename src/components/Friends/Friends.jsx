import styles from "./Friends.module.css";
import User from "./User/User";

const Friends = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.friendsItem}>
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
        </div>
    );
};

export default Friends;