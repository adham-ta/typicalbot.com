import React from 'react';
import Anchor from 'components/@atoms/anchor';
import Paragraph from 'components/@atoms/paragraph';
import classes from './index.module.scss';

const Feature: React.FC = () => (
    <div className={classes.feature}>
        <div className={classes.container}>
            <div className={classes.featureContainer}>
                <Anchor url="/">
                    <span className={`${classes.circle} ${classes.circleBlue}`}></span>
                    <h2 className={classes.title}>Insights</h2>
                    <Paragraph>Get instant access to<br />insights about your community</Paragraph>
                </Anchor>
                <Anchor url="/">
                    <span className={`${classes.circle} ${classes.circleGreen}`}></span>
                    <h2 className={classes.title}>Moderation</h2>
                    <Paragraph>Get instant access to<br />insights about your community</Paragraph>
                </Anchor>
                <Anchor url="/">
                    <span className={`${classes.circle} ${classes.circleRed}`}></span>
                    <h2 className={classes.title}>Customization</h2>
                    <Paragraph>Get instant access to<br />insights about your community</Paragraph>
                </Anchor>
            </div>
        </div>
    </div>
);

export default Feature;
