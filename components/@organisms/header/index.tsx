import React from 'react';
import HeaderNavigation from 'components/@molecules/header-navigation';

const Header: React.FC = () => (
    <React.Fragment>
        <header>
            <div className="container">
                <HeaderNavigation />
            </div>
        </header>
        <style jsx>{`
            header {
                width: 100%;
                background-color: #1B1E24;
            }

            .container {
                max-width: 80em;
                margin-left: auto;
                margin-right: auto;
            }
        `}</style>
    </React.Fragment>
);

export default Header;
