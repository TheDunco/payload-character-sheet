import React from 'react';

export const SignInUpHeader: React.FC<{ signUp?: boolean }> = ({ signUp = false }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 'none' }}>
            <h1 style={{ margin: 'auto', marginBottom: '50px' }}>Book of Names</h1>
            <h2>{signUp ? 'Sign Up' : 'Log In'}</h2>
        </div>
    );
};
