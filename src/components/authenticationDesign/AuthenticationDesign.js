import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { context, signedUserContext } from '../../App';
import { pushLocalStorage } from '../localStorageMechanism/localStorageMechanism';
import { pushSessionStorage } from '../sessionStorageMechanism/SessionStorageMechanism';
import { facebookSignIn, forgotPassword, googleSignIn } from '../loginMechanism/LogInMechanism';
import { signInEmail, signUpEmail } from '../loginMechanism/LogInMechanism';
import LoginThrough from '../loginthrough/LoginThrough';
import './AuthenticationDesign.css';

const AuthenticationDesign = (props) => {

    const [selectedPlace, setSelectedPlace, setIsWhite] = useContext(context);
    const [signedUser, setSignedUser] = useContext(signedUserContext);

    const [passwordDismatch, setPasswordDismatch] = useState(false);

    setIsWhite(true);


    const history = useHistory();
    const location = useLocation();
    const { type, prompt, link, to } = props.mode;
    const { register, handleSubmit, watch, errors } = useForm();

    const { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = (data) => {
        if (data.firstname && data.lastname) {
            signUpEmail(data.username, data.password, data.firstname + ' ' + data.lastname);
        }

        if (data.username && data.password && !data.firstname) {
            signInEmail(data.username, data.password)
                .then(newUser => {
                    if (newUser.uid && newUser.emailVerified) {
                        loginProcedure(newUser);
                    } else {
                        alert('pleaase verify your mail');
                    }
                })
        }
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(newUser => {

                if (newUser.uid) {
                    loginProcedure(newUser);
                }
            });
    }

    const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(newUser => {
                if (newUser.id) {
                    loginProcedure(newUser);
                }
            })
    }

    const isPasswordMatched = (e) => {
        const password = document.getElementById('existing-password').value;
        if (password !== e.target.value) {
            setPasswordDismatch(true);
        } else {
            setPasswordDismatch(false);
            document.getElementById('submit').disabled = false;
        }
    }

    const loginProcedure = (newUser) => {
        setSignedUser(newUser);
        storeUserInformation(newUser);
        alert('Signin Successful');
        history.replace(from);
    }

    const storeUserInformation = (newUser) => {
        if (document.getElementById('checkbox').checked) {
            pushLocalStorage("signeduser", newUser);
        } else {
            pushSessionStorage("signeduser", newUser);
        }
    }

    return (
        <div className="login-container">
            <div className="card-container alignment">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h6>{type}</h6><br />

                    {
                        type === 'Create an account' &&
                        <span>
                            <input className="login-input-design" name="firstname" defaultValue="" ref={register({ required: true })} placeholder="First Name" /><br />
                            <input className="login-input-design" name="lastname" ref={register({ required: true })} placeholder="Last Name" /><br />
                        </span>
                    }

                    <input className="login-input-design" name="username" defaultValue="" ref={register({ required: true, pattern: /\S+@\S+.\S+/ })} placeholder="Username or Email" /><br />
                    {errors.username && <span className="warning-color">Email address isn't valid</span>}

                    <input id="existing-password" type="password" className="login-input-design" name="password" ref={register({ required: true, pattern: /\w{8}/ })} placeholder="Password" autoComplete='off' /><br />
                    {errors.password && <span className="warning-color">Password need to be 8 character</span>}


                    {
                        type === 'Create an account' &&
                        <span>
                            <input type="password" onChange={isPasswordMatched} className="login-input-design" name="confirmpassword" defaultValue="" ref={register} placeholder="Confirm Password" required /><br />
                            {passwordDismatch ? <span className="warning-color">password doesn't match</span> : ''}
                        </span>
                    }

                    {
                        type === 'Login' &&
                        <span>
                            <div className="utilities-design">
                                <div>
                                    <input type="checkbox" name="remember-me" id="checkbox" value="remember me" />
                                    <label id="checkbox-label" htmlFor="checkbox">Remember me</label>
                                </div>
                                <div>
                                    <Link onClick={() => forgotPassword(1)} className="text-color">Forgot Password</Link>
                                </div>
                            </div>
                        </span>
                    }

                    <input className="button-color button-width" type="submit" id="submit" value={type} disabled={type === 'Create an account' ? true : false} />
                    <p className="center-align">{prompt}<Link to={to} className="text-color">{link}</Link></p>

                </form>
            </div>
            <div>
                <div className="divider-design">Or</div>
                <LoginThrough handleFacebookSignIn={handleFacebookSignIn} logo="facebook"></LoginThrough>
                <LoginThrough handleGoogleSignIn={handleGoogleSignIn} logo="google"></LoginThrough>
            </div>
        </div>
    );
};

export default AuthenticationDesign;