import React from 'react';
import Link from 'next/link';

type AnchorProps = {
    url: string
    as?: string
}

const Anchor: React.FC<AnchorProps> = ({ url, as, children }) => {
    if (!url.startsWith('/')) {
        return <a href={url}>{children}</a>
    } else {
        return as
            ? <Link href={url} as={as}><a>{children}</a></Link>
            : <Link href={url}><a>{children}</a></Link>
    }
};

export default Anchor;
