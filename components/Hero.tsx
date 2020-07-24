import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => (
    <React.Fragment>
        <div className="container">
            <section className="hero">
                <div className="row">
                    <div className="text">
                        <h1 className="heading">Start your Discord community off right!</h1>
                        <p className="subheading">TypicalBot seamlessly helps you and your moderators moderate your
                            community and entertains your members.</p>
                        <div className="buttons">
                            <Link href="/invite">
                                <a className="button">Add to Discord</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        {/* language=CSS */}
        <style jsx>{`
            .container {
                max-width: 1280px;
                display: flex;
                flex-direction: column;
                margin: 0 auto;
                padding: 0 40px;
            }

            .hero {
                margin-top: 10px;
            }

            .row {
                display: flex;
                flex-direction: row;
            }

            .text {
                width: 600px;
                margin-right: 40px;
                padding-top: 120px;
            }

            .heading {
                white-space: pre-line;
                font-size: 52px;
                line-height: 66px;
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                margin-bottom: 26px;
                letter-spacing: 0;
                margin-top: 0;
            }

            .subheading {
                white-space: pre-line;
                font-size: 20px;
                line-height: 30px;
                color: rgba(11, 37, 75, 0.7);
                margin: 0 0 24px;
                font-family: 'Inter', sans-serif;
            }

            .buttons {
                margin-top: 48px;
            }

            .button {
                height: 48px;
                line-height: 48px;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                font-weight: 600;
                font-family: 'Inter', sans-serif;
                text-decoration: none;
                cursor: pointer;
                background-color: #1976d2;
                color: #fff;
                box-shadow: #1976d2 0 0 0 1px, rgba(11, 37, 75, 0.12) 0 5px 7px -2px;
                padding: 0 24px;
                border-radius: 4px;
                transition: all 180ms ease-out 0s;
            }

            .button:hover {
                background: rgb(31, 105, 209);
                box-shadow: rgb(31, 105, 209) 0 0 0 1px, rgba(11, 37, 75, 0.08) 0 5px 7px -2px;
            }
        `}</style>
    </React.Fragment>
);

export default Hero;
