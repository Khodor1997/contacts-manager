import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../firebase"
import InputField from "../inputs/InputField"
import ContactFormImage from '../contacts/ContactFormImage';
import styles from './style.module.css';
import user from './../../assets/icons/user.svg';
import edit from './../../assets/icons/edit.svg';

export default function SignIn () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function logIn(e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user)
                setEmail('')
                setPassword('')
                setError('')
            }).catch((error) => {
                console.log(error)
                setError('sorry')
            })
    }

    return (
        <div className={styles['auth-background']}>
            <div className={styles['auth']}>
                <ContactFormImage styles={styles}/>
                <div className={styles['auth-form']}>
                    <form>
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
                            placeholder="Enter your password"
                        />
                        <button onClick={logIn}>signUp</button>
                    </form>
                </div>
            </div>
        </div>
    )
}