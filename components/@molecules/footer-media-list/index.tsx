import React from 'react';
import Anchor from 'components/@atoms/anchor';
import classes from './index.module.scss';

interface Props {
    items: { url?: string; text: string }[];
}

const FooterMediaList: React.FC<Props> = ({ items }) => (
    <ul className={classes.mediaItems}>
        {items.map((item, index) => (
            <li key={index} className={classes.mediaItem}>
                {
                    index === 0
                        ? item.text
                        : <Anchor url={item.url ?? '#'}>{item.text}</Anchor>
                }
            </li>
        ))}
    </ul>
);

export default FooterMediaList;
