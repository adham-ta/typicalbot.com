import React from 'react';
import classes from './index.module.scss';

interface Props {
    url: string;
}

const HeaderProfile: React.FC<Props> = ({ url }) => (
    <img src={url} className={classes.profile} />
);

export default HeaderProfile;
