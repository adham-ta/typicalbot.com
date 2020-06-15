import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Header from 'components/@organisms/header';

const DocsPage: NextPage = () => (
    <React.Fragment>
        <Head>
            <title>TypicalBot Documentation</title>
        </Head>
        <Header />
    </React.Fragment>
)

export default DocsPage;
