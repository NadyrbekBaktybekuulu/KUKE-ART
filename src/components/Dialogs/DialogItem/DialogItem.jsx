import { NavLink } from "react-router-dom";
import styles from "./../Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={styles.dialog}>
            <NavLink to={path} >{props.user}</NavLink>
        </div>
    );
};

export default DialogItem;