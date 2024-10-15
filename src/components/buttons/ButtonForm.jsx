import StarIcon from '../icons/StarIcon';
import styles from './styles.module.css'

export default function ButtonForm ({ children, type = "button", onClick, onFavoriteClick, isFavorite, disabled}) {
    return (
        <div 
            className={styles['button-form']}
        >
            <span style={{display: "flex"}} onClick={onFavoriteClick}>
                <StarIcon 
                    className={`${styles['button-form__icon']} ${isFavorite ? styles['button-form__favorite'] : ''}`}
                />
            </span>
            <div></div>
            <button
                className={styles['button-form__text']}
                type={type} 
                onClick={onClick}
                disabled={disabled} 
            >
                {children}
            </button>
        </div>
    )
}