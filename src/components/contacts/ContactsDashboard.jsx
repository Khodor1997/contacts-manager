import { useState } from 'react';
import ContactItem from './ContactItem';
import styles from './style.module.css';

export default function ContactsDashboard() {
    const [activeContactId, setActiveContactId] = useState(null);

    const contacts = [
        { id: 1, name: 'Pavel', lastName: 'Bobar', phone: '+375295800809', img: '/profile.png' },
        { id: 2, name: 'John', lastName: 'Doe', phone: '+1234567890', img: '/profile.png' }
    ];

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