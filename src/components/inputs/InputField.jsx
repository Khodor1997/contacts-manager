import styles from '../contacts/style.module.css'

export default function InputField({ icon, altText, value, onChange, type = "text", placeholder = "" }) {
    return (
        <div className={styles['contact-form__item']}>
            <img src={icon} alt={altText} />
            <span></span>
            <input
                className={styles['contact-form__input']}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
        </div>
    );
}