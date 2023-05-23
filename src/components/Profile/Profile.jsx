import Banner from "../Banner/Banner";
import Post from "./Posts/Post/Post";
import styles from "./Profile.module.css";

const Profile = () => {
    return (
        <main className={styles.main_content}>
            <Banner />
            <Post />
            <Post />
            <Post />
            <Post />
        </main>
    );
}

export default Profile;