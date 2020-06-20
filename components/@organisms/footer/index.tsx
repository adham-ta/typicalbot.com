import React from 'react';
import FooterMedia from 'components/@molecules/footer-media';
import FooterCopyrightNotice from 'components/@molecules/footer-copyright-notice';
import FooterCopyrightSocial from 'components/@molecules/footer-copyright-social';
import classes from './index.module.scss';

const Footer: React.FC = () => (
    <footer className={classes.footer}>
        <div className={classes.container}>
            <FooterMedia />
            <div className={classes.copyright}>
                <FooterCopyrightNotice year={new Date().getFullYear()} />
                <FooterCopyrightSocial />
            </div>
        </div>
    </footer>
);

export default Footer;
