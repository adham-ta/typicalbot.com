import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                    <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

                    <meta name="description" content="TypicalBot is far from typical. It's stable, lightning fast, and easy to use." />

                    <meta property="og:description" content="TypicalBot is far from typical. It's stable, lightning fast, and easy to use." />
                    <meta property="og:type" content="website" />

                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:creator" content="@Typical_Bot" />
                    <meta name="twitter:title" content="TypicalBot" />
                    <meta name="twitter:description" content="TypicalBot is far from typical. It's stable, lightning fast, and easy to use." />

                    <link rel="stylesheet" href="/css/normalize.css" />
                    <link rel="stylesheet" href="/css/nprogress.css" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />

                    <script src="https://kit.fontawesome.com/6ca40ab5f2.js" crossOrigin="anonymous" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
