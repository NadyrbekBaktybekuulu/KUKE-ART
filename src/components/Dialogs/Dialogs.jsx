import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import styles from "./Dialogs.module.css";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
debugger;
    

    let messagesElements = props.state.messages.map((mD) => {
        return <Messages message={mD.message} id={mD.id} />
    });

    let dialogsElements = props.state.dialogs.map((dD) => {
        return <DialogItem user={dD.user} id={dD.id}/>
    })

    let newMessageElement = React.createRef();

    let addNewMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }


    return (
        <div className={styles.dialogsWrapper}>
            <div className={styles.dialogs}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <textarea ref={newMessageElement} cols="90" rows="2"></textarea>
                <br />
                <button className="sendMessage" onClick={addNewMessage}>send message</button>
            </div>
        </div>
    );
};

export default Dialogs;