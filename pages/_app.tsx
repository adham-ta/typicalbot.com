import React from 'react';
import { AppProps } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
// import * as Sentry from '@sentry/node';
import 'components/@organisms/layout/layout.scss';

// Sentry.init({
//     enabled: process.env.NODE_ENV === 'production',
//     dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
// });

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// @ts-ignore
const MyApp = ({ Component, pageProps, err }: AppProps) => (
    <Component {...pageProps} err={err} />
);

export default MyApp;
