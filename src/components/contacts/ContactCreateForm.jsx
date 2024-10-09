import styles from './style.module.css';
import createImage from './../../assets/icons/add-image.svg'
import user from './../../assets/icons/user.svg'


export default function ContactCreateForm() {
    return (
        <div className={styles['create-contact']}>
            <div className={styles['create-contact__image']}>
                <img src="/profile.png" alt="profile image" />
                <div className={styles['create-contact__add-image']}>
                    <img src={createImage} alt="create image" />
                </div>
            </div>
            <div className={styles['contact-form']}>
                <form action="">
                    <div className={styles['contact-form__item']}>
                        <img src={user} alt="user icon" />
                        <span></span>
                        <input className={styles['contact-form__input']} type="text" />
                    </div>
                    <div className={styles['contact-form__item']}>
                        <img src={user} alt="user icon" />
                        <span></span>
                        <input className={styles['contact-form__input']} type="text" />
                    </div>
                    <div className={styles['contact-form__item']}>
                        <img src={user} alt="user icon" />
                        <span></span>
                        <input className={styles['contact-form__input']} type="text" />
                    </div>
                    <div className={styles['contact-form__item']}>
                        <img src={user} alt="user icon" />
                        <span></span>
                        <input className={styles['contact-form__input']} type="text" />
                    </div>
                    <div className={styles['contact-form__item']}>
                        <img src={user} alt="user icon" />
                        <span></span>
                        <input className={styles['contact-form__input']} type="text" />
                    </div>
                </form>
            </div>
        </div>
    )
}