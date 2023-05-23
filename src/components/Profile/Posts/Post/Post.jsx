import styles from './Post.module.css';

const Post = () => {
    return (
        <div className={styles.block}>
            <img className={styles.avatar} src="https://www.hotelbooqi.com/wp-content/uploads/2021/12/128-1280406_view-user-icon-png-user-circle-icon-png.png" />

            <div className={styles.description}>
                <div className={styles.posts}>
                    <div className={styles.items}>post nomber 1</div>
                </div>
            </div>
        </div>
    );
};

export default Post;