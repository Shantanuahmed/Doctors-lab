import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErorr] = useState('');
    const auth = getAuth();

    // HANDLE EMAIL INPUT FIELD
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
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
    // handle password change
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input onBlur={handlePasswordChange} type="password" name="" id="" />
                    <br />
                    <input type="submit" onClick={processLogin} value="Submit" />
                </form>
                <p>New to doctor's lab? <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>
                <button
                    className="btn-regular"
                    onClick={signInUsingGoogle}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;