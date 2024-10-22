import { onAuthStateChanged, User } from "firebase/auth"; // Импорт типов из Firebase
import { useEffect, useState } from "react";
import { auth } from "../../firebase";

export default function AuthDetails() {
    // authUser может быть либо объектом User, либо null
    const [authUser, setAuthUser] = useState<User | null>(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user: User | null) => { // Типизация user
            console.log(user, 'fdfdf');
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen(); // Отписываемся от прослушивания
        };
    }, []);

    return (
        <div>
            {authUser ? (
                <div><p>{`Signed in as ${authUser.email}`}</p></div>
            ) : <p>Signed out</p>}
        </div>
    );
}