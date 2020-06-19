import React from 'react';
import FooterMediaList from '../footer-media-list';

const FooterMedia: React.FC = () => (
    <React.Fragment>
        <div className="media">
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
                { url: 'https://tyoicalbot.com/privacy', text: 'Privacy Policy' },
                { url: '#', text: 'Security' }
            ]} />
            <FooterMediaList items={[
                { text: 'Support' },
                { url: 'mailto:support@typicalbot.com', text: 'Contact Us' },
                { url: '/support', text: 'Discord Community' }
            ]} />
        </div>
        <style jsx>{`
            .media {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                margin-bottom: 4em;
            }
        `}</style>
    </React.Fragment>
);

export default FooterMedia;
