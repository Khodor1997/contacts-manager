import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { useState, ChangeEvent, MouseEvent } from "react";
import { auth } from "../../firebase";
import InputField from "../inputs/InputField";
import ContactFormImage from '../contacts/ContactFormImage';
import ButtonForm from '../buttons/ButtonForm';
import styles from './style.module.css';
import userIcon from './../../assets/icons/user.svg';
import editIcon from './../../assets/icons/edit.svg';

interface SignInProps {
    redirectToSignUp: () => void;
}

export default function SignIn({ redirectToSignUp }: SignInProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    function logIn(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential: UserCredential) => {
                setEmail('');
                setPassword('');
                setError('');
            })
            .catch((error) => {
                console.error(error);
                setError('Sorry, something went wrong.');
            });
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div className={styles['auth-background']}>
            <div className={styles['auth']}>
                <ContactFormImage styles={styles} />
                <div className={styles['auth-form']}>
                    <form>
                        <InputField
                            icon={userIcon}
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your login"
                        />
                        <InputField
                            icon={editIcon}
                            value={password}
                            onChange={handlePasswordChange}
                            type="password"
                            placeholder="Enter your password"
                        />
                        <div 
                            onClick={redirectToSignUp}
                            className={styles['signup-text']}
                        >
                            Registration
                        </div>
                        <ButtonForm onClick={logIn}>
                            Sign In
                        </ButtonForm>
                    </form>
                </div>
            </div>
        </div>
    );
}
