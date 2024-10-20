import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Button from '../buttons/Button';
import UserIcon from "../icons/UserIcon";

export default function ContactsAuthDetails({styles, authUser}) {
    function userSignOut() {
        signOut(auth)
    }

    return (
        <div className={styles['board-header']}>
            <h2>{authUser.email}</h2>
            <div style={{display: 'flex'}}>
                <Button onClick={userSignOut} icon={<UserIcon/>}>
                    Out
                </Button>
                <div className={styles['board-header__img']}>
                    <img src="/profile.png" alt="profile image" />
                </div>
            </div>
        </div>
    );
}