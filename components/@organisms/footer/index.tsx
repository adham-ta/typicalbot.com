import React from 'react';
import FooterMedia from 'components/@molecules/footer-media';
import FooterCopyrightNotice from 'components/@molecules/footer-copyright-notice';
import FooterCopyrightSocial from 'components/@molecules/footer-copyright-social';

const Footer: React.FC = () => (
    <React.Fragment>
        <footer>
            <div className="container">
                <FooterMedia />
                <div className="copyright">
                    <FooterCopyrightNotice year={new Date().getFullYear()} />
                    <FooterCopyrightSocial />
                </div>
            </div>
        </footer>
        <style jsx>{`
            footer {
                width: 100%;
                padding: 2em 0;
                background-color: #1B1E24;
                color: #ffffff;
                font-family: Arial, sans-serif;
                font-size: 0.9rem;
            }

            .container {
                width: 100%;
                max-width: 60em;
                margin: 0 auto;
                position: relative;
            }

            .copyright {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr;
            }
        `}</style>
    </React.Fragment>
);

export default Footer;
