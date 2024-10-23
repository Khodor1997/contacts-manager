import InputField from '../inputs/InputField';
import ButtonForm from '../buttons/ButtonForm';
import ContactFormImage from './ContactFormImage';
import { FC, FormEvent, useState } from 'react';
import styles from './style.module.css';
import user from './../../assets/icons/user.svg';
import users from './../../assets/icons/users.svg';
import phones from './../../assets/icons/phone.svg';
import mail from './../../assets/icons/mail.svg';
import edit from './../../assets/icons/edit.svg';
import IContact from '../../types/contact';

interface IErrorState {
    name: boolean;
    contactInfo: boolean;
}

interface IProps {
    create: (contact: IContact) => void;
}

const ContactCreateForm: FC<IProps> = ({create}) => {
    const [contact, setContact] = useState<IContact>({id: null, name: '', email: '', phone: '', address: '', message: '', isFavorite: false})
    const [error, setError] = useState<IErrorState>({name: false, contactInfo: false})

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            const newContact = { ...contact, id: Date.now() };
            create(newContact);
            setContact({name: '', email: '', phone: '', address: '', message: '', id: null, isFavorite: false});
        }
    };

    const handleFavoriteClick = () => {
        setContact({...contact, isFavorite: !contact.isFavorite})
    };

    const validateForm = () => {
        const nameValid = contact.name.trim() != ''
        const contactInfoValid = contact.phone.trim() != '' || contact.email.trim() != ''

        setError({
            name: nameValid,
            contactInfo: !contactInfoValid
        })

        return nameValid && contactInfoValid
    }

    return (
        <div className={styles['create-contact']}>
            <ContactFormImage styles={styles}/>
            <div className={styles['contact-form']}>
                <form onSubmit={handleSubmit}>
                    <InputField
                        icon={user}
                        altText="User icon"
                        value={contact.name}
                        onChange={e => setContact({...contact, name: e.target.value})}
                        validate={error.name}
                        placeholder="Enter your name"
                    />
                    <InputField
                        icon={users}
                        altText="Email icon"
                        value={contact.email}
                        onChange={e => setContact({...contact, email: e.target.value})}
                        validate={error.name}
                        placeholder="Enter your email"
                    />
                    <InputField
                        icon={phones} 
                        altText="Phone icon"
                        value={contact.phone}
                        onChange={e => setContact({...contact, phone: e.target.value})}
                        validate={error.name}
                        placeholder="Enter your phone"
                    />
                    <InputField
                        icon={mail}
                        altText="Address icon"
                        value={contact.address}
                        onChange={e => setContact({...contact, address: e.target.value})}
                        placeholder="Enter your address"
                    />
                    <InputField
                        icon={edit}
                        altText="Message icon"
                        value={contact.message}
                        onChange={e => setContact({...contact, message: e.target.value})}
                        placeholder="Enter your message"
                    />
                    
                    <ButtonForm
                        type="submit"
                        isFavorite={contact.isFavorite} 
                        onFavoriteClick={handleFavoriteClick}
                        disabled={!!(!contact.name || (!contact.phone && !contact.email))}
                    >
                        Submit
                    </ButtonForm>
                </form>
            </div>
        </div>
    );
};

export default ContactCreateForm;