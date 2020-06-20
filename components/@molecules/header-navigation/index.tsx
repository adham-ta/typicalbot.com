import React from 'react';
import Link from 'next/link';
import Anchor from 'components/@atoms/anchor';
import useUser from 'hooks/useUser';
import HeaderProfile from 'components/@molecules/header-profile';
import classes from './index.module.scss';

const HeaderNavigation: React.FC = () => {
    const { user } = useUser({});

    return (
        <nav className={classes.nav}>
            <div className={`${classes.flex} ${classes.left0}`}>
                <Link href="/">
                    <span>TypicalBot</span>
                </Link>
                <Anchor url="/">Blog</Anchor>
                <Anchor url="/docs/introduction">Documentation</Anchor>
                <Anchor url="/support">Support</Anchor>
            </div>
            <div className={`${classes.flex} ${classes.right0}`}>
                {
                    (user?.isLoggedIn)
                        ? <Anchor url="/dashboard"><HeaderProfile url={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}?format=png&size=32`} /> {user.username}#{user.discriminator}</Anchor>
                        : <Anchor url="/api/oauth2/discord/login">Login</Anchor>
                }
            </div>
        </nav>
    );
};

export default HeaderNavigation;
