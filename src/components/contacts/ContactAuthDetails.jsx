export default function ContactsAuthDetails({styles, authUser}) {

    return (
        <div className={styles['board-header']}>
            <h2>{authUser.email}</h2>
            <div className={styles['board-header__img']}>
                <img src="/profile.png" alt="profile image" />
            </div>
        </div>
    );
}