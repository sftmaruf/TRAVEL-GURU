import React from 'react';
import AuthenticationDesign from '../authenticationDesign/AuthenticationDesign';

const LogIn = () => {

    const mode = {
        type: 'Login',
        prompt: 'Don\'t have an account? ',
        to: '/signup',
        link: 'Create an account'
    }


    return (
        <div>
            <AuthenticationDesign mode={mode}/>
        </div>
    );
};

export default LogIn;