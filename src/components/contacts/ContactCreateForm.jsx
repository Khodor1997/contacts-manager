import InputField from '../inputs/InputField';
import ButtonForm from '../buttons/ButtonForm';
import { useState } from 'react';
import styles from './style.module.css';
import createImage from './../../assets/icons/add-image.svg';
import user from './../../assets/icons/user.svg';
import users from './../../assets/icons/users.svg';
import phones from './../../assets/icons/phone.svg';
import mail from './../../assets/icons/mail.svg';
import edit from './../../assets/icons/edit.svg';

export default function ContactCreateForm({create}) {
    const [contact, setContact] = useState({name: '', email: '', phone: '', address: '', message: '', isFavorite: false})

    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { ...contact, id: Date.now() };

        create(newContact)
        setContact({name: '', email: '', phone: '', address: '', message: ''})
    };

    const handleFavoriteClick = () => {
        setContact({...contact, isFavorite: !contact.isFavorite})
    };
    return (
        <div className={styles['create-contact']}>
            <div className={styles['create-contact__image']}>
                <img src="/profile.png" alt="profile image" />
                <div className={styles['create-contact__add-image']}>
                    <img src={createImage} alt="create image" />
                </div>
            </div>
            <div className={styles['contact-form']}>
                <form onSubmit={handleSubmit}>
                    <InputField icon={user} altText="User icon" value={contact.name} onChange={e => setContact({...contact, name: e.target.value})} placeholder="Enter your name" />
                    <InputField icon={users} altText="Email icon" value={contact.email} onChange={e => setContact({...contact, email: e.target.value})} placeholder="Enter your email" />
                    <InputField icon={phones} altText="Phone icon" value={contact.phone} onChange={e => setContact({...contact, phone: e.target.value})} placeholder="Enter your phone" />
                    <InputField icon={mail} altText="Address icon" value={contact.address} onChange={e => setContact({...contact, address: e.target.value})} placeholder="Enter your address" />
                    <InputField icon={edit} altText="Message icon" value={contact.message} onChange={e => setContact({...contact, message: e.target.value})} placeholder="Enter your message" />
                    
                    <ButtonForm
                        type="submit"
                        isFavorite={contact.isFavorite} 
                        onFavoriteClick={handleFavoriteClick}
                    >
                        Submit
                    </ButtonForm>
                </form>
            </div>
        </div>
    );
}
