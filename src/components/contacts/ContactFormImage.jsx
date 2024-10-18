import createImage from './../../assets/icons/add-image.svg';

export default function ContacFormImage({styles}) {

    return (
        <div className={styles['create-contact__image']}>
            <img src="/profile.png" alt="profile image" />
            <div className={styles['create-contact__add-image']}>
                <img src={createImage} alt="create image" />
            </div>
        </div>
    )
}