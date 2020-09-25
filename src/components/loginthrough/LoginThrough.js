import { Avatar } from '@material-ui/core';
import React from 'react';
import fblogo from '../../resources/Icon/fb.png';
import glogo from '../../resources/Icon/google.png';
import './LoginThrough.css';

const LoginThrough = (props) => {

    const logo = props.logo === 'facebook' ? fblogo : glogo;
    return (
        <div>
            <button onClick={props.handleGoogleSignIn || props.handleFacebookSignIn} className="login-through">
                <Avatar alt="fblogo" src={logo} />
                <div className="prompt-container">
                    <p className="center-align">Continue with {props.logo}</p>
                </div>
            </button>
        </div>
    );
};

export default LoginThrough;