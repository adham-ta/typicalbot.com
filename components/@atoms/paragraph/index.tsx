import React from 'react';

const Paragraph: React.FC = ({ children }) => (
    <React.Fragment>
        <p>{children}</p>
        {/* language=CSS */}
        <style jsx>{`
            p {
                margin: 0;
            }
        `}</style>
    </React.Fragment>
);

export default Paragraph;
