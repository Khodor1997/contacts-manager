import styles from './styles.module.css'

export default function Button({ className, icon, children, onClick}) {
    return (
        <button onClick={onClick} className={`${styles.button} ${className || ''}`}>
            {className === 'reverse' ? (
                <>
                    <div>{icon}</div>
                    <span>{children}</span>
                </>
            ) : (
                <>
                    <span>{children}</span>
                    <div className={styles['button-icon']}>{icon}</div>
                </>
            )}
        </button>
    )
}