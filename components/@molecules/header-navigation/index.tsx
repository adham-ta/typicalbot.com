import React from 'react';
import Link from 'next/link';
import Anchor from 'components/@atoms/anchor';
import useUser from 'hooks/useUser';
import HeaderProfile from 'components/@molecules/header-profile';

const HeaderNavigation: React.FC = () => {
    const { user } = useUser({});

    return (
        <React.Fragment>
            <nav>
                <div className="flex left-0">
                    <Link href="/">
                        <span>TypicalBot</span>
                    </Link>
                    <Anchor url="/">Documentation</Anchor>
                    <Anchor url="https://discord.gg/typicalbot">Support</Anchor>
                </div>
                <div className="flex right-0">
                    {
                        (user && user.isLoggedIn)
                            ? <Anchor url="/profile"><HeaderProfile url={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}?format=png&size=32`} /> {user.username}#{user.discriminator}</Anchor>
                            : <Anchor url="/api/login">Login</Anchor>
                    }
                </div>
            </nav>
            <style jsx>{`
                nav {
                    position: relative;
                    height: 4rem;
                    justify-content: space-between;
                    align-items: center;
                    display: flex;
                }

                .flex {
                    display: flex;
                }

                .flex > :global(a), .flex > span {
                    text-decoration: none;
                    font-size: .875rem;
                    color: #fff;
                    padding-left: .75rem;
                    padding-right: .75rem;
                    padding-top: .5rem;
                    padding-bottom: .5rem;
                    line-height: 1.25rem;
                    font-weight: 600;
                    border-radius: .375rem;
                    transition: background-color .15s cubic-bezier(.4, 0, .2, 1);
                    font-family: 'Inter', sans-serif;
                    cursor: pointer;
                }

                .flex > span {
                    font-size: 1rem;
                    font-weight: 700;
                }

                .flex > :global(a):not(:first-child) {
                    margin-left: 1rem;
                }

                .flex > :global(a):hover {
                    background-color: #2C313A;
                }

                .left-0 {
                    left: 0;
                }

                .right-0 {
                    right: 0;
                }
            `}</style>
        </React.Fragment>
    )
}

export default HeaderNavigation;
