import React from 'react';
import { SWRConfig } from 'swr';
import { AppProps } from 'next/app';
import fetch from 'lib/fetch';
import NProgress from 'nprogress';
import Router from 'next/router';
import * as Sentry from '@sentry/node';
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

Sentry.init({
    enabled: PHASE_PRODUCTION_BUILD && process.env.CANARY !== 'true',
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
)

export default MyApp;
