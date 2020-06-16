import React from 'react';
import Anchor from 'components/@atoms/anchor';

const GettingReady: React.FC = () => (
    <React.Fragment>
        <div className="getting-ready">
            <div className="container">
                <h2 className="title">Ready to get started with TypicalBot?</h2>
                <div className="button-container">
                    <Anchor url="/invite">Add to Discord</Anchor>
                </div>
            </div>
        </div>
        <style jsx>{`
            .getting-ready {
                width: 100%;
                background-color: #1B1E24;
                font-family: Arial, sans-serif;
                color: #ffffff;
                text-align: center;
            }

            .container {
                max-width: 80em;
                margin-left: auto;
                margin-right: auto;
                background-color: #22262E;
                padding: 4em 0;
            }

            .getting-ready .title {
                font-weight: normal;
                margin: 0 0 1em;
            }

            .button-container {
                width: 100%;
                display: flex;
                justify-content: center;
            }

            .button-container > :global(a) {
                align-items: center;
                background: #fff;
                border-radius: 25px;
                display: flex;
                font-size: 18px;
                font-weight: bold;
                justify-content: center;
                max-width: 250px;
                padding: 15px;
                position: relative;
                transition: all .4s;
                width: 100%;
                text-decoration: none;
                color: #22262E;
            }

            .button-container > :global(a):hover {
                transform: translateY(-2px);
            }
        `}</style>
    </React.Fragment>
)

export default GettingReady;
