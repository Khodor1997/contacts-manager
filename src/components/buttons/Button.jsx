import styles from './styles.module.css'

export default function Button({ className, icon, children }) {
    return (
        <button className={`${styles.button} ${className || ''}`}>
            {className === 'reverse' ? (
                <>
                    <div>{icon}</div>
                    <span>{children}</span>
                </>
            ) : (
                <>
                    <span>{children}</span>
                    <div>{icon}</div>
                </>
            )}
        </button>
    )
}