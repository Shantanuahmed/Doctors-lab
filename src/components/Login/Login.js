
import React from 'react';
import useAuth from '../../hooks/useAuth';

import './Login.css';

const Login = () => {
    const {
        user,
        signInUsingGoogle,
        handleRegistration,
        isLogin,
        toggleLogin,
        handleEmailChange,
        handlePasswordChange,
        erorr,
    } = useAuth();

    return (
        <div className="mx-5 my-5">
            <form onSubmit={handleRegistration}>
                <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already registerd?
                            </label>
                        </div>
                    </div>
                </div>
                <div className="text-danger row mb-3">{erorr}</div>
                <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button>
            </form>
            <br /><br /><br /><br />
            <button onClick={signInUsingGoogle}>Google sign in</button>
            {user.name && <div>
                <h2>Welcome {user.name}</h2>
            </div>}
        </div>
    );
}

export default Login;
