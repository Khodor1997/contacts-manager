import StarIcon from '../icons/StarIcon';
import styles from './style.module.css';
import dots from '../../assets/icons/dotted.svg';

export default function ContactItem({ user, activeContactId, toggleActiveContact }) {
    return (
        <div className={styles.contact}>
            <div className={styles['contact__info']}>
                <div className={styles['contact__img']}>
                    {user.img && <img src={user.img} alt="profile image" />}
                    {!user.img && <img src="/profile.png" alt="profile image" />}
                </div>
                <div>
                    <h3 className={styles['contact__name']}>{user.name} {user.lastName}</h3>
                    <span className={styles['contact__phone']}>{user.phone}</span>
                </div>
            </div>
            <div className={styles['contact__actions']}>
                {/* <StarIcon className={styles['contact__favorites']} /> */}
                <StarIcon className={`${styles['contact__favorites']} ${user.isFavorite ? styles['contact__favorites_active'] : ''}`} />

                <img 
                    onClick={() => toggleActiveContact(user.id)} 
                    className={styles['contact__control']} 
                    src={dots} 
                    alt="dots menu" 
                />
            </div>
            {activeContactId === user.id && (
                <div className={styles['contact__actions-panel']}>
                    <span>Delete contact</span>
                    <span>Edit contact</span>
                </div>
            )}
        </div>
    );
}