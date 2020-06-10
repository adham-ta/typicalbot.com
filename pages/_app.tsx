import React from 'react';
import { SWRConfig } from 'swr';
import { AppProps } from 'next/app';
import fetch from 'lib/fetch';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <SWRConfig value={{ fetcher: fetch, onError: (err) => console.error(err) }}>
            <Component {...pageProps} />
        </SWRConfig>
    )
}

export default MyApp;
