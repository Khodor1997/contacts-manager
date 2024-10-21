import { createUserWithEmailAndPassword } from "firebase/auth"
import ContactFormImage from '../contacts/ContactFormImage';
import InputField from "../inputs/InputField"
import ButtonForm from "../buttons/ButtonForm";
import { useState } from "react"
import { auth } from "../../firebase"
import styles from './style.module.css';
import user from './../../assets/icons/user.svg';
import edit from './../../assets/icons/edit.svg';

export default function SignUp ({redirectToSignIn}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [copyPassword, setCopyPassword] = useState('')
    const [error, setError] = useState('')

    function register(e) {
        e.preventDefault()
        if (copyPassword !== password) {
            setError('Password incorrect')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                setEmail('')
                setPassword('')
                setCopyPassword('')
                setError('')
            }).catch((error) => console.log(error))
    }

    return (
        <div className={styles['auth-background']}>
            <div className={styles['auth']}>
                <ContactFormImage styles={styles}/>
                <div className={styles['auth-form']}>
                    <form onSubmit={register}>
                        <InputField
                            icon={user}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your login"
                        />
                        <InputField
                            icon={edit}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder="Enter your password"
                        />
                        <InputField
                            icon={edit}
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
    )
}