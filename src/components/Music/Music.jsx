import styles from "./Music.module.css";

const Music = () => {
    return (
        <audio className={styles.audio}>
            <source src="../../public/West.mp3"/>
        </audio>
    );
};

export default Music;