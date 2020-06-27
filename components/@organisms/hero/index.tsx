import React from 'react';
import Anchor from 'components/@atoms/anchor';
import Paragraph from 'components/@atoms/paragraph';
import classes from './index.module.scss';

interface Props {
    title: string;
    subtitle: string;
    image: string;
}

const Hero: React.FC<Props> = ({ title, subtitle, image }) => (
    <section className={classes.hero}>
        <div className={classes.container}>
            <article className={classes.article}>
                <h1 className={classes.title}>{title}</h1>
                <Paragraph>{subtitle}</Paragraph>
                <div className={classes.buttonContainer}>
                    <Anchor url="/invite">Add to Discord</Anchor>
                    <Anchor url="/">Upgrade to Pro</Anchor>
                </div>
            </article>
            <figure className={classes.figure}>
                <img src={image} />
            </figure>
        </div>
    </section>
);

export default Hero;
