import React from 'react';

export const SignUpLinkButton: React.FC = () => {
    return (
        <div className="form-submit">
            <a
                className="btn btn--style-secondary btn--icon-style-without-border btn--size-medium btn--icon-position-right"
                href="/admin/signup"
            >
                Need to Sign Up?
            </a>
        </div>
    );
};
