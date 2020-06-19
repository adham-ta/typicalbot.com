import React from 'react';
import { SWRConfig } from 'swr';
import { AppProps } from 'next/app';
import fetch from 'lib/fetch';
import NProgress from 'nprogress';
import Router from 'next/router';
import * as Sentry from '@sentry/node';

Sentry.init({
    enabled: process.env.NODE_ENV === 'production',
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// @ts-ignore
const MyApp = ({ Component, pageProps, err }: AppProps) => (
    <SWRConfig value={{ fetcher: fetch, onError: (err) => console.error(err) }}>
        <Component {...pageProps} err={err} />
    </SWRConfig>
);

export default MyApp;
