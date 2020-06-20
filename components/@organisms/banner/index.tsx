import React from 'react';
import classes from './index.module.scss';

interface Props {
    text: string;
}

const Banner: React.FC<Props> = ({ text }) => (
    <div className={classes.banner}>
        <div className={classes.container}>
            <div className={classes.content}>{text}</div>
        </div>
    </div>
);

export default Banner;
