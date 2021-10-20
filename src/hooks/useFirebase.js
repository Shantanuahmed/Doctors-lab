import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, sendEmailVerification, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erorr, setErorr] = useState('');
    const [isLogin, setIslogin] = useState(false);

    // HANDLE REGISTRATION
    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setErorr('Password must be at least 6 characters')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setErorr('Password must contain 2 capital letters')
            return;
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password);
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setErorr('')
            })
            .catch(error => {
                setErorr(error.message);
            })
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setErorr('');
                verifyEmail();
            })
            .catch(error => {
                setErorr(error.message);
            })
    }
    const toggleLogin = e => {
        setIslogin(e.target.checked);
    }
    // HANDLE EMAIL INPUT FIELD
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    // handle password change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }


    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            });
    }
    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])


    const logOut = () => {
        signOut(auth)
            .then(() => { });
    }


    return {
        user,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        isLogin,
        toggleLogin,
        createNewUser,
        handleEmailChange,
        handlePasswordChange,
        erorr,
        processLogin
    }
};

export default useFirebase;