import React from 'react';

interface Props {
    text: string;
}

const Banner: React.FC<Props> = ({ text }) => (
    <React.Fragment>
        <div className="banner">
            <div className="container">
                <div className="content">{text}</div>
            </div>
        </div>
        <style jsx>{`
            .banner {
                width: 100%;
                background-color: #1B1E24;
                font-family: Arial, sans-serif;
                color: #ffffff;
            }

            .container {
                max-width: 80em;
                margin-left: auto;
                margin-right: auto;
                background-color: #22262E;
                border-top-left-radius: 6px;
                border-top-right-radius: 6px;
                text-align: center;
            }

            .content {
                font-size: 20px;
                font-weight: bold;
                padding: 1em 2em;
            }
        `}</style>
    </React.Fragment>
);

export default Banner;
