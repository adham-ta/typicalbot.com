import React from 'react';
import {NextPage} from 'next';
import useUser from '../hooks/useUser';
import Link from 'next/link';

const IndexPage: NextPage = () => {
    const {user} = useUser({});

    return (
        <React.Fragment>
            {
                (user && user.isLoggedIn)
                    ? <a href="#">
                        <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}?format=png&size=32`}/> {user.username}#{user.discriminator}
                    </a>
                    : <Link href="/api/login">
                        <a>Login</a>
                    </Link>
            }
        </React.Fragment>
    )
}

export default IndexPage;
