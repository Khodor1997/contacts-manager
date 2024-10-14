import { useState } from 'react';
import ContactItem from './ContactItem';
import styles from './style.module.css';

export default function ContactsDashboard({contacts}) {
    const [activeContactId, setActiveContactId] = useState(null);

    function toggleActiveContact(contactId) {
        if (activeContactId === contactId) {
            setActiveContactId(null);
        } else {
            setActiveContactId(contactId);
        }
    }

    return (
        <div className={styles['contacts-board']}>
            <div className={styles['board-header']}>
                <h2>Khodor Pavel</h2>
                <div className={styles['board-header__img']}>
                    <img src="/profile.png" alt="profile image" />
                </div>
            </div>
            {contacts.map((contact) => (
                <ContactItem 
                    key={contact.id} 
                    user={contact} 
                    activeContactId={activeContactId} 
                    toggleActiveContact={toggleActiveContact} 
                />
            ))}
        </div>
    );
}