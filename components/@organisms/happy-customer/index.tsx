import React from 'react';
import classes from './index.module.scss';

interface Props {
    image: string;
    quote: string;
    author: string;
    server: string;
}

const HappyCustomer: React.FC<Props> = ({ image, quote, author, server }) => (
    <div className={classes.container}>
        <div className={classes.innerContainer}>
            <div>
                <div className={classes.row}>
                    <div className={classes.col0}>
                        <img src={image} className={classes.icon} />
                    </div>
                    <div className={classes.col1}>
                        <div className={classes.body}>
                            <div className={classes.row}>
                                <div className={classes.col2}>
                                    <div className={classes.pr}>
                                        <blockquote className={classes.blockquote}>{quote}</blockquote>
                                        <div className={classes.media}>
                                            <div className={classes.mediaBody}>
                                                <span className={classes.name}>{author}</span>
                                                <span> — {server}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.col3}>
                                    <hr className={classes.hr} />
                                    <div className={classes.pl}>
                                        <span>65,000+</span>
                                        <p>Communities use TypicalBot to manage and moderate.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HappyCustomer;
