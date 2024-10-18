import { useState } from 'react';
import ContactItem from './ContactItem';
import ContactsAuthDetails from './ContactAuthDetails';
import styles from './style.module.css';

export default function ContactsDashboard({contacts, remove, authUser}) {
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
            <ContactsAuthDetails authUser={authUser} styles={styles}/>
            {contacts.map((contact) => (
                <ContactItem 
                    key={contact.id} 
                    user={contact} 
                    remove={remove}
                    activeContactId={activeContactId} 
                    toggleActiveContact={toggleActiveContact} 
                />
            ))}
            {!contacts.length && (
                <div className={styles['contacts-empty']}>Сontact list is empty</div>
            )}
        </div>
    );
}