import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.post}>
            <img className={styles.avatar} src="../../../../UserLogo.png" alt="User avatar" />
            {props.comments}
            <div className={styles.likes}>
                {"Likes "}
                <span className={styles.likesCount}>
                    {props.likesCount}
                </span>
            </div>
        </div>
    );
};

export default Post;