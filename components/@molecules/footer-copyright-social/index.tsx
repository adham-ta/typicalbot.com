import React from 'react';
import Anchor from 'components/@atoms/anchor';
import classes from './index.module.scss';

const FooterCopyrightSocial: React.FC = () => (
    <div className={classes.social}>
        <Anchor url="https://twitter.com/Typical_Bot"><i className="fab fa-twitter" /></Anchor>
        <Anchor url="https://github.com/typicalbot"><i className="fab fa-github" /></Anchor>
    </div>
);

export default FooterCopyrightSocial;
