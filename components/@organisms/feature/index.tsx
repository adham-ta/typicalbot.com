import React from 'react';
import Anchor from 'components/@atoms/anchor';
import Paragraph from 'components/@atoms/paragraph';

const Feature: React.FC = () => (
    <React.Fragment>
        <div className="feature">
            <div className="container">
                <div className="feature-container">
                    <Anchor url="/">
                        <span className="circle circle-blue"></span>
                        <h2 className="title">Insights</h2>
                        <Paragraph>Get instant access to<br />insights about your community</Paragraph>
                    </Anchor>
                    <Anchor url="/">
                        <span className="circle circle-green"></span>
                        <h2 className="title">Moderation</h2>
                        <Paragraph>Get instant access to<br />insights about your community</Paragraph>
                    </Anchor>
                    <Anchor url="/">
                        <span className="circle circle-red"></span>
                        <h2 className="title">Customization</h2>
                        <Paragraph>Get instant access to<br />insights about your community</Paragraph>
                    </Anchor>
                </div>
            </div>
        </div>
        <style jsx>{`
            .feature {
                width: 100%;
                background-color: #1B1E24;
                font-family: Arial, sans-serif;
            }

            .container {
                max-width: 80em;
                margin-left: auto;
                margin-right: auto;
            }

            .feature-container {
                display: flex;
                align-items: center;
                justify-content:center;
                width: 100%;
                z-index: 2;
            }

            .feature-container > :global(a) {
                flex-basis: 33.3%;
                background: #2C313A;
                min-height: 150px;
                padding: 60px 30px;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                text-decoration: none;
                position: relative;
                overflow: hidden;
            }

            .feature-container > :global(a):hover .circle {
                width: 100%;
                height: 100%;
                transition: width 0.3s ease, border-bottom-left-radius 0.3s ease, border-bottom-right-radius 0.1s ease, border-top-left-radius 0.1s ease, border-top-right-radius 0.1s ease;
                top: 0;
                right: 0;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                border-bottom-left-radius: 0;
            }

            .feature-container > :global(a):hover .circle:after {
                transform: scale(1);
                transition: 0.2s ease;
                transition-delay: 0.1s;
            }

            .feature-container > :global(a):hover .circle:before {
                transition: 0.2s ease;
                right: 100px;
                top: 100px;
            }

            .feature-container > :global(a):hover > :global(p) {
                color: #e6e6e6;
                transition: 0.15s ease;
                transition-delay: 0.15s;
            }

            .feature-container > :global(a):hover .title {
                color: white;
                transition: 0.1s ease;
                transition-delay: 0.15s;
            }

            .title {
                font-weight: 600;
                position: relative;
                color: #fff;
                margin: 0;
            }

            .feature-container > :global(a) > :global(p) {
                font-size: 14px;
                color: #969696;
                position: relative;
                margin: 0;
            }

            .circle {
                width: 50px;
                height: 50px;
                background: #c8c8c8;
                border-top-left-radius: 100rem;
                border-top-right-radius: 100rem;
                border-bottom-right-radius: 100rem;
                border-bottom-left-radius: 100rem;
                position: absolute;
                display: block;
                right: 50px;
                top: 50px;
                transition: width 0.15s ease, height 0.15s ease, border-bottom-left-radius 0.3s ease, border-bottom-right-radius 0.3s ease, border-top-left-radius 0.3s ease, border-top-right-radius 0.3s ease;
            }

            .circle:after {
                width: 300px;
                height: 300px;
                position: absolute;
                top: -100px;
                right: -100px;
                background: rgba(255, 255, 255, 0.2);
                content: '';
                border-radius: 100rem;
                transform: scale(0);
            }

            .circle:before {
                width: 25px;
                height: 25px;
                opacity: 1;
                position: absolute;
                content: '';
                top: 12.5px;
                right: 12.5px;
                background-image: url('data:image/svg+xml;base64,DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItYXJyb3ctdXAtcmlnaHQiPjxsaW5lIHgxPSI3IiB5MT0iMTciIHgyPSIxNyIgeTI9IjciPjwvbGluZT48cG9seWxpbmUgcG9pbnRzPSI3IDcgMTcgNyAxNyAxNyI+PC9wb2x5bGluZT48L3N2Zz4=');
                background-size: cover;
                transition: 0.5s ease;
                fill: #fff;
            }

            .circle-blue {
                background-color: #2b85fd;
            }

            .circle-green {
                background-color: #00c569;
            }

            .circle-red {
                background-color: #dd4949;
            }

            @media only screen and (max-width: 1000px) {
                .feature-container {
                    flex-wrap: wrap;
                }

                .feature-container > :global(a) {
                    flex-basis: 100%;
                }
            }

            @media only screen and (max-width: 850px) {
                .feature-container {
                    position: relative;
                }
            }
        `}</style>
    </React.Fragment>
)

export default Feature;
