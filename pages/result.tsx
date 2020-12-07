import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetchGetJson } from '../lib/fetch-helpers';
import RawDetails from '../components/RawDetails';

const Page: NextPage = () => {
    const router = useRouter();

    const {
        data,
        error
    } = useSWR(router.query.session_id ? `/api/checkout_sessions/${router.query.session_id}` : null, fetchGetJson);

    if (error) return <React.Fragment>Missing order id</React.Fragment>;

    return (
        <Layout title='Order Confirmation'>
            <h2>Result:</h2>
            <p>Status: {data?.payment_intent?.status ?? 'loading'}</p>
            <p>Raw:</p>
            <RawDetails content={data ?? 'loading'} />
        </Layout>
    );
};

export default Page;
