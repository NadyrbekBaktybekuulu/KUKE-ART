import Banner from "./Banner/Banner";
import Post from "./Post/Post";
import styles from "./Posts.module.css";

const Posts = () => {
    return (
        <div className={styles.posts}>
            <Banner />
            <Post comments="Hello!" likesCount=" 37" />
            <Post comments="How are you!" likesCount=" 41" />
            <Post comments="It's amazing!" likesCount=" 327" />
            <Post comments="By!" likesCount=" 477" />
            <Post comments="Awesome!" likesCount=" 542" />
            <Post comments="Don't do this!" likesCount=" 3485" />
            <Post comments="I don't belive!" likesCount=" 9846" />
        </div>
    );
};

export default Posts;