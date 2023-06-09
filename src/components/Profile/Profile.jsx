import MyPosts from "./MyPosts/MyPoists";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div className={styles.posts}>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;