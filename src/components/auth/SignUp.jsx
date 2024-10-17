import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../firebase"

export default function SignUp () {
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
                console.log(user)
                setEmail('')
                setPassword('')
                setCopyPassword('')
                setError('')
            }).catch((error) => console.log(error))
    }

    return (
        <div>
            <form onSubmit={register}>
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                <input
                    value={copyPassword}
                    onChange={(e) => setCopyPassword(e.target.value)}
                    type="password"
                />
                <button>signUp</button>
            </form>
        </div>
    )
}