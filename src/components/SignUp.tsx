import { json } from 'express';
import React from 'react';
import { SignUpQuery } from '../utils/graphql/queries/sign-up';
import { GraphQLBody } from '../utils/graphql/types/graphql-body';

export const SignUp: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [showSignup, setShowSignup] = React.useState(false);

    const signUp = async () => {
        if (password === confirmPassword) {
            console.log('Passwords match');
            const query: GraphQLBody = {
                query: SignUpQuery,
                variables: {
                    email,
                    password,
                    firstName,
                    lastName,
                },
            };

            //TODO: Make helper function for this
            const resp = await fetch(`http://localhost:3002/api/graphql`, {
                method: 'POST',
                headers: {
                    //TODO: Allow bearer with auth token to make API calls for all instances. Add to standard isAdminOrSelf auth
                    // Authorization: `Bearer ${CMS_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(query),
            });

            console.log(`%c[SignUp.tsx] resp :>> ${JSON.stringify(resp, null, 2)}`, 'color:green');
        }
    };

    return (
        <>
            {!showSignup && (
                <div className="form-submit">
                    <button
                        onClick={() => setShowSignup(!showSignup)}
                        className="btn btn--style-secondary btn--icon-style-without-border btn--size-medium btn--icon-position-right"
                    >
                        Need to Sign Up?
                    </button>
                </div>
            )}
            {showSignup && (
                <div>
                    <h2 style={{ marginTop: '50px' }}>Sign Up</h2>
                    <form
                        onSubmit={async (e) => {
                            await signUp();
                        }}
                    >
                        <div className="field-type password">
                            <label className="field-label" htmlFor="firstName">
                                First Name
                                <span className="required">*</span>
                            </label>
                            <input
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                value={firstName}
                                id="firsName"
                                type="text"
                            />
                        </div>

                        <div className="field-type password">
                            <label className="field-label" htmlFor="lastName">
                                Last Name
                                <span className="required">*</span>
                            </label>
                            <input
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                value={lastName}
                                id="lastName"
                                type="text"
                            />
                        </div>

                        <div className="field-type email">
                            <label className="field-label" htmlFor="email">
                                Email
                                <span className="required">*</span>
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                value={email}
                                id="email"
                                type="text"
                            />
                        </div>

                        <div className="field-type password">
                            <label className="field-label" htmlFor="password">
                                Password
                                <span className="required">*</span>
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                value={password}
                                id="password"
                                type="password"
                            />
                        </div>

                        <div className="field-type password">
                            <label className="field-label" htmlFor="confirmPassword">
                                Confirm Password
                                <span className="required">*</span>
                            </label>
                            <input
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                value={confirmPassword}
                                id="confirmPassword"
                                type="password"
                            />
                        </div>
                        <div className="form-submit">
                            <button
                                type="submit"
                                className="btn btn--style-primary btn--icon-style-without-border btn--size-medium btn--icon-position-right"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};
