import { FC } from 'react';
import StarIcon from '../icons/StarIcon';
import styles from './styles.module.css'

interface IProps {
    children: React.ReactNode,
    type?: "button" | "submit" | "reset",
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    onFavoriteClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    isFavorite?: boolean,
    disabled? : boolean
}

const ButtonForm: FC<IProps> = ({ children, type = "button", onClick, onFavoriteClick, isFavorite, disabled}) => {
    return (
        <div 
            className={styles['button-form']}
        >
            {onFavoriteClick ? (
                <>
                    <span style={{display: "flex"}} onClick={onFavoriteClick}>
                        <StarIcon 
                            className={`${styles['button-form__icon']} ${isFavorite ? styles['button-form__favorite'] : ''}`}
                        />
                    </span>
                    <div></div>
                </>
            ): null}
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
};

export default ButtonForm;