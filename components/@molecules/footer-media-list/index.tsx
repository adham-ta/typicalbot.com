import React from 'react';
import Anchor from 'components/@atoms/anchor';

type Props = {
    items: { url?: string, text: string }[]
}

const FooterMediaList: React.FC<Props> = ({ items }) => (
    <React.Fragment>
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {
                        index === 0
                            ? item.text
                            : <Anchor url={item.url ?? '#'}>{item.text}</Anchor>
                    }
                </li>
            ))}
        </ul>
        <style jsx>{`
            ul {
                list-style: none;
                margin: 0;
                padding: 0;
            }

            li {
                font-size: 0.9rem;
                margin-bottom: 0.5em;
                color: #a9a9a9;
                letter-spacing: 0.01rem;
            }

            li:first-child {
                text-transform: uppercase;
                font-weight: bold;
                margin-bottom: 1.2em;
                color: #ffffff;
            }

            li > :global(a) {
                color: #a9a9a9;
                text-decoration: none;
                transition: color .15s ease-in-out;
            }

            li > :global(a):hover {
                color: #ffffff;
            }
        `}</style>
    </React.Fragment>
);

export default FooterMediaList;
