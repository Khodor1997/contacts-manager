import { FC } from 'react';
import createImage from './../../assets/icons/add-image.svg';

interface IProps {
    styles: { [key: string]: string };
}

const ContactFormImage:FC<IProps> = ({styles}) => {
    return (
        <div className={styles['create-contact__image']}>
            <img src="/profile.png" alt="profile image" />
            <div className={styles['create-contact__add-image']}>
                <img src={createImage} alt="create image" />
            </div>
        </div>
    )
}

export default ContactFormImage;
