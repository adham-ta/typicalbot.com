import React from 'react';
import Anchor from 'components/@atoms/anchor';
import classes from './index.module.scss';

const GettingReady: React.FC = () => (
    <div className={classes.gettingReady}>
        <div className={classes.container}>
            <h2 className={classes.title}>Ready to get started with TypicalBot?</h2>
            <div className={classes.buttonContainer}>
                <Anchor url="/invite">Add to Discord</Anchor>
            </div>
        </div>
    </div>
);

export default GettingReady;
