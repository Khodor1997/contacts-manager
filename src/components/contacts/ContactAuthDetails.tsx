import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Button from '../buttons/Button';
import UserIcon from "../icons/UserIcon";
import { User } from "firebase/auth";
import { FC } from "react";

type Styles = { [className: string]: string }; 

interface ContactsAuthDetailsProps {
    styles: Styles,
    authUser: User | null,
};

const ContactsAuthDetails: FC<ContactsAuthDetailsProps> = ({ styles, authUser }) => {
    function userSignOut() {
        signOut(auth);
    }

    return (
        <div className={styles['board-header']}>
            {authUser ? (
                <>
                    <h2>{authUser.email}</h2>
                    <div style={{ display: 'flex' }}>
                        <Button onClick={userSignOut} icon={<UserIcon />}>
                            Out
                        </Button>
                        <div className={styles['board-header__img']}>
                            <img src={authUser.photoURL || "/profile.png"} alt="profile image" />
                        </div>
                    </div>
                </>
            ) : (
                <p>No user signed in</p>
            )}
        </div>
    );
};

export default ContactsAuthDetails;