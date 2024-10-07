import StarIcon from '../icons/StarIcon'
import styles from './style.module.css'
import dots from '../../assets/icons/dotted.svg'
import { useState } from 'react';

export default function ContactItem() {
    const [showPanel, setShowPanel] = useState(false);

    function togglePanel() {
        setShowPanel(prev => !prev);
    }
    return (
        <div className={styles.contact}>
            <div className={styles['contact__info']}>
                <div className={styles['contact__img']}>
                    <img src="/profile.png" alt="profile image" />
                </div>
                <div>
                    <h3 className={styles['contact__name']}>Pavel Khodar</h3>
                    <span className={styles['contact__phone']}>+375295877809</span>
                </div>
                </div>
            <div className={styles['contact__actions']}>
                <StarIcon className={styles['contact__favorites']}/>
                <img onClick={togglePanel} className={styles['contact__control']} src={dots} alt="" />
            </div>
            {showPanel && (
                <div className={styles['contact__actions-panel']}>
                    <span>Delete contact</span>
                    <span>Edit contact</span>
                </div>
            )}
        </div>
        
    )
}