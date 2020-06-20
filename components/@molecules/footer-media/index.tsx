import React from 'react';
import FooterMediaList from '../footer-media-list';
import classes from './index.module.scss';

const FooterMedia: React.FC = () => (
    <div className={classes.media}>
        <FooterMediaList items={[
            { text: 'Product' },
            { url: '#', text: 'Multilingual' },
            { url: '#', text: 'Moderation' },
            { url: '#', text: 'Customization' },
            { url: '#', text: 'Entertainment' }
        ]} />
        <FooterMediaList items={[
            { text: 'Resources' },
            { url: '#', text: 'Blog' },
            { url: '/changelog', text: 'Changelog' },
            { url: '#', text: 'Documentation' }
        ]} />
        <FooterMediaList items={[
            { text: 'Company' },
            { url: '#', text: 'About' },
            { url: '#', text: 'Careers' },
            { url: 'https://typicalbot.com/terms', text: 'Terms of Service' },
            { url: 'https://typicalbot.com/privacy', text: 'Privacy Policy' },
            { url: '#', text: 'Security' }
        ]} />
        <FooterMediaList items={[
            { text: 'Support' },
            { url: 'mailto:support@typicalbot.com', text: 'Contact Us' },
            { url: '/support', text: 'Discord Community' }
        ]} />
    </div>
);

export default FooterMedia;
