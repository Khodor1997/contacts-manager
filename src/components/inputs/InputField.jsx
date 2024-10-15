import styles from './style.module.css'
import { useState } from 'react';

export default function InputField({ icon, altText, value, onChange, type = "text", placeholder = "", validate }) {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <>
            <div className={`${styles['contact-form__item']} ${isFocused ? styles['contact-form__item--active'] : ''} ${validate ? styles['contact-form__item--error'] : ''}`}>
                <img src={icon} alt={altText} />
                <span></span>
                <input
                    className={styles['contact-form__input']}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                />
            </div>
            {validate && <span className={styles['error-message']}>Name is required</span>}
        </>
    );
}