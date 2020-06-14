import React from 'react';
import Anchor from 'components/@atoms/anchor';
import Paragraph from 'components/@atoms/paragraph';

type Props = {
    title: string,
    subtitle: string,
    image: string
}

const Hero: React.FC<Props> = ({ title, subtitle, image }) => (
    <React.Fragment>
        <section className="hero">
            <div className="container">
                <article>
                    <h1 className="title">{title}</h1>
                    <Paragraph>{subtitle}</Paragraph>
                    <div className="button-container">
                        <Anchor url="/">Add to Discord</Anchor>
                        <Anchor url="/">Learn more</Anchor>
                    </div>
                </article>
                <figure>
                    <img src={image} />
                </figure>
            </div>
        </section>
        <style jsx>{`
            .hero {
                width: 100%;
                background-color: #1B1E24;
                font-family: Arial, sans-serif;
                color: #ffffff;
                padding: 6em 0;
            }

            .container {
                align-items: center;
                display: flex;
                max-width: 80em;
                margin-left: auto;
                margin-right: auto;
                min-height: 400px;
                width: 100%;
            }

            .container > article {
                max-width: 550px;
                width: 100%;
                padding-left: .75rem;
            }

            .container > figure {
                margin-left: auto;
                padding-right: .75rem;
            }

            .title {
                color: #fff;
                font-size: 50px;
                letter-spacing: 1px;
                line-height: 50px;
                margin: 0;
                position: relative;
            }

            .title:before {
                background: #fff;
                content: '';
                height: 2px;
                left: 0;
                position: absolute;
                top: -30px;
                width: 50px;
            }

            @media (max-width: 768px) {
                .title {
                    margin-top: 40px;
                    font-size: 30px;
                    line-height: 40px;
                }
            }

            article > :global(p) {
                color: #fff;
                letter-spacing: 1px;
                margin: 1em 0;
            }

            .button-container {
                display: flex;
            }

            @media (max-width: 768px) {
                .button-container {
                    flex-wrap: wrap;
                }
            }

            .button-container > :global(a) {
                align-items: center;
                background: #fff;
                border-radius: 25px;
                display: flex;
                font-size: 18px;
                font-weight: bold;
                justify-content: center;
                margin-right: 10px;
                margin-top: 25px;
                max-width: 250px;
                padding: 15px;
                position: relative;
                transition: all .4s;
                width: 100%;
                text-decoration: none;
                color: #22262E;
            }

            .button-container > :global(a):last-child {
                background: none;
                border: 1px solid #fff;
                color: #fff;
            }

            .button-container > :global(a):hover {
                transform: translateY(-2px);
            }

            @media (max-width: 768px) {
                .container > figure {
                    display: none;
                }
            }

            figure > img {
                max-width: 450px;
                width: 100%;
            }
        `}</style>
    </React.Fragment>
)

export default Hero;
