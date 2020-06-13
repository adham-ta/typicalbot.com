import React from 'react';
import { NextPage } from 'next';
import Anchor from 'components/@atoms/anchor';
import Paragraph from 'components/@atoms/paragraph';
import Footer from 'components/@organisms/footer';
import Header from 'components/@organisms/header';
import Head from 'next/head';

const IndexPage: NextPage = () => {
    return (
        <React.Fragment>
            <Head>
                <title>TypicalBot</title>
            </Head>
            <Header />
            <section className="hero">
                <div className="max-w-80m">
                    <h1 className="hero-title">Start a Discord community the right way!</h1>
                    <h3 className="hero-subtitle">TypicalBot will seamlessly help you moderate your community and provide entertainment to your members.</h3>
                    <Anchor url="https://discordapp.com/oauth2/authorize?client_id=166527505610702848&permissions=432532567&scope=bot">Add to Discord</Anchor>
                </div>
            </section>
            <section className="server-advertisement">
                <div className="max-w-80m">
                    <div className="header">
                        <h2>
                            <img src="https://officialnrla.com/images/nrla.png" alt="Server Icon" />
                        National Rocket League Association
                    </h2>
                        <Anchor url="#">Join Community <i className="fal fa-long-arrow-right" /></Anchor>
                    </div>
                    <div className="content">
                        <Paragraph>
                            NRLA is a competitive Rocket League league that is open to players of any skill level. Our focus
                            is on the improvement and growth of players. We strive for a fun, non-toxic, challenging
                            environment.
                        </Paragraph>
                    </div>
                </div>
            </section>
            <section className="simple">
                <div className="max-w-80m">
                    <h2>Ready to get started with TypicalBot?</h2>
                    <Anchor
                        url="https://discordapp.com/oauth2/authorize?client_id=166527505610702848&permissions=432532567&scope=bot">
                        Add to Discord</Anchor>
                </div>
            </section>
            <Footer />
            <style jsx>{`
                .max-w-80m {
                    max-width: 80em;
                    margin-left: auto;
                    margin-right: auto;
                }

                .hero {
                    width: 100%;
                    background-color: #1B1E24;
                    font-family: Arial, sans-serif;
                    color: #ffffff;
                    text-align: center;
                }

                .hero .max-w-80m {
                    padding: 8em 0;
                }

                .hero-title, .hero-subtitle {
                    margin: 0;
                }

                .hero-subtitle {
                    font-weight: normal;
                    margin: 1.25em 0 1.75em;
                }

                .hero .max-w-80m > :global(a) {
                    padding: 1rem 2rem;
                    background-color: transparent;
                    border: 1px solid #ffffff;
                    border-radius: 0.4rem;
                    font-family: Arial, sans-serif;
                    color: #ffffff;
                    transition: color .3s ease-in-out, background-color .3s ease-in-out;
                    text-decoration: none;
                    display: inline-block;
                }

                .hero .max-w-80m > :global(a):hover {
                    background-color: #ffffff;
                    color: #22262E;
                }

                .server-advertisement {
                    width: 100%;
                    background-color: #1B1E24;
                    font-family: Arial, sans-serif;
                    color: #ffffff;
                }

                .server-advertisement .max-w-80m {
                    background-color: #ffffff;
                    padding: 4em;
                    color: #22262E;
                    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
                    z-index: 100;
                }

                .server-advertisement .header {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    grid-column-gap: 1rem;
                    margin-bottom: 2em;
                }

                .server-advertisement .header h2 {
                    font-weight: normal;
                    margin: 0;
                    display: flex;
                    align-items: center;
                }

                .server-advertisement .header h2 img {
                    width: 50px;
                    height: 50px;
                    /*border-radius: 0.4rem;*/
                    margin-right: 1rem;
                }

                .server-advertisement .header > :global(a) {
                    padding: 1rem 2rem;
                    background-color: #22262E;
                    border-radius: 0.4rem;
                    font-family: Arial, sans-serif;
                    color: #ffffff;
                    transition: color .15s ease-in-out, background-color .15s ease-in-out;
                    text-decoration: none;
                    text-align: center;
                    margin: 0 0 0 auto;
                    max-width: 10em;
                }

                .server-advertisement .header > :global(a):hover {
                    background-color: #1B1E24;
                }

                .server-advertisement .header > :global(a) svg {
                    margin-left: 0.5em;
                    font-size: 1rem;
                }

                .server-advertisement .content {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    grid-column-gap: 1rem;
                }

                .simple {
                    width: 100%;
                    background-color: #1B1E24;
                    font-family: Arial, sans-serif;
                    color: #ffffff;
                    text-align: center;
                }

                .simple .max-w-80m {
                    background-color: #22262E;
                    padding: 4em 0;
                }

                .simple h2 {
                    font-weight: normal;
                    margin: 0 0 1em;
                }

                .simple .max-w-80m > :global(a) {
                    padding: 1rem 2rem;
                    background-color: transparent;
                    border: 1px solid #ffffff;
                    border-radius: 0.4rem;
                    font-family: Arial, sans-serif;
                    color: #ffffff;
                    transition: color .3s ease-in-out, background-color .3s ease-in-out;
                    text-decoration: none;
                    display: inline-block;
                }

                .simple .max-w-80m > :global(a):hover {
                    background-color: #ffffff;
                    color: #22262E;
                }
            `}</style>
        </React.Fragment>
    )
}

export default IndexPage;
