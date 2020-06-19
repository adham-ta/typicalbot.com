import React from 'react';
import NextErrorComponent, { ErrorProps } from 'next/error';
import * as Sentry from '@sentry/node';

// @ts-ignore
const MyError = ({ statusCode, hasGetInitialPropsRun, err }: ErrorProps) => {
    if (!hasGetInitialPropsRun && err) {
        Sentry.captureException(err);
    }

    return <NextErrorComponent statusCode={statusCode} />;
};

// @ts-ignore
MyError.getInitialProps = async ({ res, err, asPath }) => {
    // @ts-ignore
    const errorInitialProps = await NextErrorComponent.getInitialProps({ res, err });

    // @ts-ignore
    errorInitialProps.hasGetInitialPropsRun = true;

    if (res?.statusCode === 404) {
        return {
            statusCode: 404
        };
    }

    if (err) {
        Sentry.captureException(err);
        return errorInitialProps;
    }

    Sentry.captureException(
        new Error(`_error.js getInitialProps missing data at path: ${asPath}`)
    );

    return errorInitialProps;
};

export default MyError;
