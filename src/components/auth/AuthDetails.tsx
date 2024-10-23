import { onAuthStateChanged, User } from "firebase/auth"; // Импорт типов из Firebase
import { FC, useEffect, useState } from "react";
import { auth } from "../../firebase";

const AuthDetails: FC = () => {
    const [authUser, setAuthUser] = useState<User | null>(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user: User | null) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        };
    }, []);

    return (
        <div>
            {authUser ? (
                <div><p>{`Signed in as ${authUser.email}`}</p></div>
            ) : <p>Signed out</p>}
        </div>
    );
};

export default AuthDetails;