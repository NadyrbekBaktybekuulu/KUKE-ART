import styles from "./../Dialogs.module.css";

const Messages = (props) => {
    return (
        <div className={styles.message}>
            {props.message}
        </div>
    );
};


export default Messages;