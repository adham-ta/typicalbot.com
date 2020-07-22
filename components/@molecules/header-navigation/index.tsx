import React from 'react';
import Link from 'next/link';
import Anchor from 'components/@atoms/anchor';
import classes from './index.module.scss';

const HeaderNavigation: React.FC = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.flex} ${classes.left0}`}>
                <Link href="/">
                    <span>TypicalBot</span>
                </Link>
                <Anchor url="/">Blog</Anchor>
                <Anchor url="/">Pricing</Anchor>
                <Anchor url="/docs/introduction">Documentation</Anchor>
                <Anchor url="/support">Support</Anchor>
            </div>
            <div className={`${classes.flex} ${classes.right0}`}>
                <Anchor url="/">Login</Anchor>
            </div>
        </nav>
    );
};

export default HeaderNavigation;
