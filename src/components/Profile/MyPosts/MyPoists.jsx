import React from "react";
import styles from "./MyPoists.module.css";
import Post from "./Post/Post";




const MyPosts = (props) => {

    let postsElements = props.posts.map((p) => {
        return <Post comments={p.comment} likesCount={p.likesCount} />
    })

    let newPostElement = React.createRef();

    let addNewPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={styles.postBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement} id="" cols="30" rows="5"></textarea>
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;

