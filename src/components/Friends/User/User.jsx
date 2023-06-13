import stls from "./User.module.css";

const User = () => {
    return (
        <div className={stls.userWrapper}>
            <div className={stls.avaWrapper}>
                <img src="../../../../UserLogo.png" alt="Avatar" className={stls.ava} />
            </div>
        </div>
    )
}

export default User;