import React from 'react';

interface Props {
    content: object
}

const RawDetails: React.FC<Props> = ({ content }) => {
    const details: string = JSON.stringify(content, null, 4);
    return <pre>{details}</pre>;
};

export default RawDetails;
