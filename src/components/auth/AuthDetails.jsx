import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../../firebase"

export default function AuthDetails() {
    const [authUser, setAuthUser] = useState(null)
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })
        return () => {
            listen()
        }
    }, [])
    return (
        <div>
            {authUser ? (
                <div><p>{`Signed is as ${authUser.email}`}</p></div>
            ) : <p>Signed out</p>}
        </div>
    )
}