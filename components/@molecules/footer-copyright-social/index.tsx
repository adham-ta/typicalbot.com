import React from 'react';
import Anchor from 'components/@atoms/anchor';

const FooterCopyrightSocial: React.FC = () => (
    <React.Fragment>
        <div className="social">
            <Anchor url="https://twitter.com/Typical_Bot"><i className="fab fa-twitter" /></Anchor>
            <Anchor url="https://github.com/typicalbot"><i className="fab fa-github" /></Anchor>
        </div>
        <style jsx>{`
            .social {
                text-align: right;
            }

            .social > :global(a) {
                font-size: 0.9rem;
                color: #ffffff;
            }

            .social > :global(a):not(:last-child) {
                margin-right: 1em;
            }
        `}</style>
    </React.Fragment>
);

export default FooterCopyrightSocial;
