import ContactItem from './ContactItem'
import styles from './style.module.css'

export default function ContactsDashboard() {
    return (
        <div className={styles['contacts-board']}>
            <div className={styles['board-header']}>
                <h2>Khodor Pavel</h2>
                <div className={styles['board-header__img']}>
                    <img src="/profile.png" alt="profile image" />
                </div>
            </div>
            <ContactItem/>
            <ContactItem/>
            <ContactItem/>
            <ContactItem/>
        </div>
    )
}