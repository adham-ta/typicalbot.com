import React from 'react';
import Head from 'next/head';
import Header from 'components/@organisms/header';
import Footer from 'components/@organisms/footer';

interface Props {
    title?: string;
}

const Layout: React.FC<Props> = ({ title, children }) => (
    <React.Fragment>
        <Head>
            <title>{title ?? 'TypicalBot'}</title>

            <meta property="og:title" content={title ?? 'TypicalBot'} />
        </Head>
        <Header />
        {children}
        <Footer />
    </React.Fragment>
);

export default Layout;
