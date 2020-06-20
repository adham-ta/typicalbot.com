import React from 'react';
import HeaderNavigation from 'components/@molecules/header-navigation';
import classes from './index.module.scss';

const Header: React.FC = () => (
    <header className={classes.header}>
        <div className={classes.container}>
            <HeaderNavigation />
        </div>
    </header>
);

export default Header;
