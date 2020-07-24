import React from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';

interface LayoutProps {
    title: string;
    ogTitle?: string;
    ogDescription?: string;
}

const Layout: React.FC<LayoutProps> = ({title, ogTitle, ogDescription, children}) => (
    <React.Fragment>
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <title>{title} &ndash; TypicalBot</title>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://typicalbot.com"/>
            <meta property="og:title" content={ogTitle ?? "TypicalBot - Discord Bot"}/>
            <meta property="og:description" content={ogDescription ?? "TypicalBot seamlessly helps you and your moderators moderate your community and entertains your members."}/>
            <meta property="og:image" content="https://typicalbot.com/img/typicalbot-transparent.png"/>

            <link rel="dns-prefetch" href="https://fonts.googleapis.com"/>

            <link rel="icon" href="/img/favicon-32.png" sizes="32x32"/>
            <link rel="icon" href="/img/favicon-128.png" sizes="128x128"/>
            <link rel="icon" href="/img/favicon-192.png" sizes="192x192"/>
            <link rel="shortcut icon" href="/img/favicon-196.png" sizes="196x196"/>
            <link rel="apple-touch-icon" href="/img/favicon-152.png" sizes="152x152"/>
            <link rel="apple-touch-icon" href="/img/favicon-167.png" sizes="167x167"/>
            <link rel="apple-touch-icon" href="/img/favicon-180.png" sizes="180x180"/>

            <link rel="manifest" href="/site.webmanifest"/>

            <link rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"/>
            <script src="https://kit.fontawesome.com/6ca40ab5f2.js" crossOrigin="anonymous"/>
        </Head>
        <Header/>
        {children}
        <Footer/>
    </React.Fragment>
);

export default Layout;
