import React, {FC} from 'react';
import styles from './styles.module.css';

interface IProps {
    className?: string;
    icon: React.ReactNode;
    children: React.ReactNode;
    onClick: () => void;
}

const Button:FC<IProps> = ({ className, icon, children, onClick }) => {
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
    );
};

export default Button;