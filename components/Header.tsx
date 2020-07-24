import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
    <React.Fragment>
        <header>
            <div className="container">
                <div className="inner">
                    <div className="logo">
                        <Link href="/">
                            <a>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1571.57 1625.48">
                                    <defs>
                                        <style dangerouslySetInnerHTML={{__html: '.cls-1 { fill: #303030; }'}}/>
                                    </defs>
                                    <title>TypicalBot Icon</title>
                                    <g id="Layer_2" data-name="Layer 2">
                                        <g id="Layer_1-2" data-name="Layer 1">
                                            <path className="cls-1"
                                                d="M260.26,0s-60.88,584.44,347,1108l-200.9,146.11S-50.23,797.52,4.56,0Z"/>
                                            <path className="cls-1"
                                                d="M503.77,0H753.38S716.85,407.89,917.75,712.29l-133.93,207S479.42,687.94,503.77,0Z"/>
                                            <path className="cls-1"
                                                d="M1021.25,0H1557s188.72,907.1-791.43,1625.48L607.27,1442.84s700.11-560.09,681.85-1193.23H1021.25Z"/>
                                        </g>
                                    </g>
                                </svg>
                                <span>TypicalBot</span>
                            </a>
                        </Link>
                    </div>
                    <nav>
                        <ul className="desktop">
                            <li>
                                <Link href="/docs">
                                    <a>Documentation</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/support">
                                    <a>Support</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/invite">
                                    <a className="button mobile-hidden">Add to Discord</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        {/* language=CSS */}
        <style jsx>{`
            header {
                height: 70px;
                display: flex;
                z-index: 1000;
            }

            @media (min-width: 43.75em) {
                header {
                    height: 90px;
                }
            }

            .container {
                max-width: 1280px;
                width: 100%;
                display: flex;
                flex-direction: column;
                margin: 0 auto;
                padding: 0 40px;
            }

            .inner {
                display: flex;
                justify-content: space-between;
                flex: 1 1 0;
            }

            .logo {
                align-self: center;
                position: relative;
                width: 125px;
                height: 26px;
            }

            .logo a {
                display: flex;
                align-items: center;
                text-decoration: none;
            }

            .logo svg {
                flex-shrink: 0;
                height: 26px;
            }

            .logo span {
                color: #303030;
                position: absolute;
                right: 0;
                font-family: 'Inter', sans-serif;
                font-weight: 600;
            }

            nav {
                align-self: center;
            }

            ul.desktop {
                list-style: none;
                margin: 0;
                padding: 0;
                display: block;
            }

            ul.desktop li {
                display: inline-block;
            }

            ul.desktop li:not(:last-child) {
                margin-right: 24px;
            }

            @media (min-width: 71.25em) {
                ul.desktop li:not(:last-child) {
                    margin-right: 48px;
                }
            }

            ul.desktop li a {
                color: #303030;
                text-decoration: none;
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                transition: color 180ms ease-out 0s;
            }

            ul.desktop li a:hover {
                color: #1976d2;
            }

            ul.desktop li a.button {
                height: 38px;
                font-weight: 500;
                padding: 0 12px;
                line-height: 48px;
                display: none;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                cursor: pointer;
                background-color: rgba(25, 118, 210, 0.08);
                color: #1976d2;
                box-shadow: rgba(25, 118, 210, 0.08) 0 0 0 1px;
                border-radius: 4px;
                transition: all 180ms ease-out 0s;
            }

            ul.desktop li a.button:hover {
                color: #fff;
                box-shadow: #1976d2 0 0 0 1px, rgba(25, 118, 210, 0.08) 0 5px 7px -2px;
                background: #1976d2;
            }

            @media (min-width: 71.25em) {
                ul.desktop li a.button.mobile-hidden {
                    display: inline-flex;
                }
            }
        `}</style>
    </React.Fragment>
);

export default Header;
