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
                { url: 'https://github.com/sylkellc/typicalbot/blob/3.x/CHANGELOG.md', text: 'Changelog' },
                { url: '#', text: 'Documentation' }
            ]} />
            <FooterMediaList items={[
                { text: 'Company' },
                { url: '#', text: 'About' },
                { url: '#', text: 'Careers' },
                { url: 'https://sylke.co/terms', text: 'Terms of Service' },
                { url: 'https://sylke.co/privacy', text: 'Privacy Policy' },
                { url: '#', text: 'Security' }
            ]} />
            <FooterMediaList items={[
                { text: 'Support' },
                { url: '#', text: 'Contact Us' },
                { url: 'https://discord.gg/typicalbot', text: 'Discord Community' }
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
