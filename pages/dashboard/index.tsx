import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Header from 'components/@organisms/header';

const ProfilePage: NextPage = () => (
    <React.Fragment>
        <Head>
            <title>TypicalBot Profile</title>
        </Head>
        <Header />
    </React.Fragment>
)

export default ProfilePage;
