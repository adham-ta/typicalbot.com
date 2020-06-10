import React from 'react';
import { SWRConfig } from 'swr';
import { AppProps } from 'next/app';
import fetch from 'lib/fetch';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <SWRConfig value={{ fetcher: fetch, onError: (err) => console.error(err) }}>
            <Component {...pageProps} />
        </SWRConfig>
    )
}

export default MyApp;
