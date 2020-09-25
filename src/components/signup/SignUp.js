import React from 'react';
import AuthenticationDesign from '../authenticationDesign/AuthenticationDesign';

const SignUp = () => {

    const mode = {
        type: 'Create an account',
        prompt: 'Already have an account? ',
        to: '/login',
        link: 'Login'
    }

    return (
        <div>
            <AuthenticationDesign mode = {mode} />
        </div>
    );
};

export default SignUp;