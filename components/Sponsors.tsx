import React from 'react';

const Sponsors: React.FC = () => (
    <React.Fragment>
        <div className="container">
            <div className="sponsors">
                <div className="sponsor">
                    <a href="https://www.jetbrains.com/">
                        <img src="/img/jb-logo.png" alt="Jetbrains" height="100px"/>
                    </a>
                </div>
                <div className="sponsor">
                    <a href="https://crowdin.com/">
                        <img src="/img/cin-logo.png" alt="Crowdin" height="100px"/>
                    </a>
                </div>
                <div className="sponsor">
                    <a href="https://discordservers.me/">
                        <img src="/img/ds-logo.png" alt="Discord Servers" height="80px" className="invert"/>
                    </a>
                </div>
            </div>
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

            .sponsors {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-column-gap: 1rem;
                padding: 120px 0 0;
            }

            .sponsor {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .sponsor img.invert {
                filter: invert(100%);
            }
        `}</style>
    </React.Fragment>
);

export default Sponsors;
