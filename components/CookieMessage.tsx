import React from 'react';
import Link from 'next/link';

const CookieMessage: React.FC = () => (
    <React.Fragment>
        <div className="cookie-message">
            <h4>Cookies & Privacy</h4>
            <p>We use cookies that keep you logged in while using our website. We also use Cloudflare, which uses cookies as well.
                For more information, you can check out our <Link href="/legal/[slug]" as="/legal/privacy"><a>privacy policy</a></Link>.
                Is this okay?</p>
            <p>
                <button>Reject</button>
                <button>Accept</button>
            </p>
        </div>
        {/* language=CSS */}
        <style jsx>{`
            .cookie-message {
                position: fixed;
                right: 30px;
                bottom: 30px;
                max-width: 550px;
                background-color: #303030;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
                margin-left: 30px;
                font-family: 'Inter', sans-serif;
                z-index: 1000;
            }

            h4 {
                color: #ffffff;
                font-size: 18px;
                font-weight: 500;
                margin-bottom: 10px;
            }

            p {
                color: #cccccc;
                font-size: 15px;
                line-height: 1.5em;
            }

            p:last-child {
                margin-bottom: 0;
                text-align: right;
            }

            a {
                color: #ffffff;
                text-decoration: none;
                font-size: 15px;
                padding-bottom: 2px;
                border-bottom: 1px dotted #ffffff;
                transition: color 180ms ease-out 0s, border-bottom-color 180ms ease-out 0s;
            }

            a:hover {
                color: #cccccc;
                border-bottom-color: #cccccc;
            }

            button {
                border: none;
                background: #ffffff;
                color: #303030;
                font-family: 'Inter', sans-serif;
                font-size: 15px;
                padding: 7px;
                border-radius: 3px;
                margin-left: 15px;
                cursor: pointer;
                transition: background-color 180ms ease-out 0s;
            }

            button:hover {
                background-color: #f3f3f3;
            }
        `}</style>
    </React.Fragment>
);

export default CookieMessage;
