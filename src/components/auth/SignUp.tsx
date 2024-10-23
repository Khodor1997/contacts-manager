import { createUserWithEmailAndPassword } from "firebase/auth";
import ContactFormImage from '../contacts/ContactFormImage';
import InputField from "../inputs/InputField";
import ButtonForm from "../buttons/ButtonForm";
import { useState, FormEvent, FC } from "react";
import { auth } from "../../firebase";
import styles from './style.module.css';
import userIcon from './../../assets/icons/user.svg';
import editIcon from './../../assets/icons/edit.svg';

interface IProps {
    redirectToSignIn: () => void;
}

const SignUp: FC<IProps> = ({ redirectToSignIn }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [copyPassword, setCopyPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const register = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (copyPassword !== password) {
            setError('Password incorrect');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setEmail('');
                setPassword('');
                setCopyPassword('');
                setError('');
            })
            .catch((error) => console.error(error.message));
    };

    return (
        <div className={styles['auth-background']}>
            <div className={styles['auth']}>
                <ContactFormImage styles={styles} />
                <div className={styles['auth-form']}>
                    <form onSubmit={register}>
                        <InputField
                            icon={userIcon}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your login"
                        />
                        <InputField
                            icon={editIcon}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter your password"
                        />
                        <InputField
                            icon={editIcon}
                            value={copyPassword}
                            onChange={e => setCopyPassword(e.target.value)}
                            type="password"
                            placeholder="Enter your password"
                        />
                        <div
                            onClick={redirectToSignIn}
                            className={styles['signup-text']}
                        >
                            You already have a profile?
                        </div>
                        <ButtonForm onClick={register}> Sign Up </ButtonForm>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;