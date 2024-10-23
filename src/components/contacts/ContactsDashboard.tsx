import { FC, useState } from 'react';
import ContactItem from './ContactItem';
import ContactsAuthDetails from './ContactAuthDetails';
import styles from './style.module.css';
import IContact from '../../types/contact';
import { User } from "firebase/auth";


interface IProps {
    contacts: IContact[],
    remove: (user: IContact) => void,
    authUser: User | null
}

const ContactsDashboard: FC<IProps> = ({contacts, remove, authUser}) => {
    const [activeContactId, setActiveContactId] = useState<number | null>(null);

    function toggleActiveContact(contactId: number | null): void {
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
};

export default ContactsDashboard;