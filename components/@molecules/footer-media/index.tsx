import React from 'react';
import FooterMediaList from '../footer-media-list';
import classes from './index.module.scss';

const FooterMedia: React.FC = () => (
    <div className={classes.media}>
        <FooterMediaList items={[
            { text: 'Product' },
            { url: '#', text: 'Add to Discord' },
            { url: '#', text: 'Pro' }
        ]} />
        <FooterMediaList items={[
            { text: 'Company' },
            { url: '#', text: 'About' },
            { url: '#', text: 'Careers' }
        ]} />
        <FooterMediaList items={[
            { text: 'Resources' },
            { url: '#', text: 'Support' },
            { url: '#', text: 'Blog' },
            { url: '/docs/introduction', text: 'Documentation' }
        ]} />
        <FooterMediaList items={[
            { text: 'Legal' },
            { url: '#', text: 'Terms' },
            { url: '#', text: 'Privacy' },
            { url: '#', text: 'Guidelines' }
        ]} />
    </div>
);

export default FooterMedia;
