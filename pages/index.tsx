import React from 'react';
import {NextPage} from 'next';
import Layout from 'components/Layout';
import Hero from 'components/Hero';

const Page: NextPage = () => (
    <React.Fragment>
        <Layout title="Home">
            <Hero/>
        </Layout>
        {/* language=CSS */}
        <style jsx global>{`
            body {
                margin: 0;
                padding: 0;
                background-image: url("/img/background.png");
                background-size: cover;
                background-repeat: no-repeat;
                background-position: top;
            }
        `}</style>
    </React.Fragment>
);

export default Page;
