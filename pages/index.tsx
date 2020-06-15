import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Footer from 'components/@organisms/footer';
import Header from 'components/@organisms/header';
import Hero from 'components/@organisms/hero';
import Banner from 'components/@organisms/banner';
import Feature from 'components/@organisms/feature';
import FeaturedArticle from 'components/@organisms/featured-article';
import GettingReady from 'components/@organisms/getting-ready';

const IndexPage: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>TypicalBot</title>
            </Head>
            <Header />
            <Hero title="Start your Discord community off right!" subtitle="TypicalBot seamlessly helps you and your moderators moderate your community and entertains your members." image="/img/hero.png" />
            <Banner text="Over 66,000 other community owners are using TypicalBot in their communities!" />
            <Feature />
            <FeaturedArticle />
            <GettingReady />
            <Footer />
        </React.Fragment>
    )
}

export default IndexPage;
