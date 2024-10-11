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

export default function ContactCreateForm() {
    // Состояние для каждого инпута
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');

    const [isFavorite, setIsFavorite] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { name, email, phone, address, message, isFavorite };

        console.log(formData);
        clearForm()
    };

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        console.log('111111')
    };

    const clearForm = (() => {
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setMessage('');
    })
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
                    <InputField icon={user} altText="User icon" value={name} onChange={setName} placeholder="Enter your name" />
                    <InputField icon={users} altText="Email icon" value={email} onChange={setEmail} placeholder="Enter your email" />
                    <InputField icon={phones} altText="Phone icon" value={phone} onChange={setPhone} placeholder="Enter your phone" />
                    <InputField icon={mail} altText="Address icon" value={address} onChange={setAddress} placeholder="Enter your address" />
                    <InputField icon={edit} altText="Message icon" value={message} onChange={setMessage} placeholder="Enter your message" />
                    
                    {/* <button type="submit">Submit</button> */}
                    <ButtonForm
                        type="submit"
                        isFavorite={isFavorite} 
                        onFavoriteClick={handleFavoriteClick}
                    >
                        Submit
                    </ButtonForm>
                </form>
            </div>
        </div>
    );
}
