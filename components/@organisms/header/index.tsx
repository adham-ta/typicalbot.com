import React from 'react';
import Link from 'next/link';
import Anchor from 'components/@atoms/anchor';
import useUser from 'hooks/useUser';

const Header: React.FC = () => {
    const { user } = useUser({});

    return (
        <React.Fragment>
            <header>
                <div className="container">
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
                                    ? <Anchor url="/"><img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}?format=png&size=32`} className="profile" /> {user.username}#{user.discriminator}</Anchor>
                                    : <Anchor url="/api/login">Login</Anchor>
                            }
                        </div>
                    </nav>
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

                .profile {
                    border-radius: 50%;
                    display: inline-block;
                    vertical-align: middle;
                    margin-right: 0.2em;
                }
            `}</style>
        </React.Fragment>
    )
};

export default Header;
