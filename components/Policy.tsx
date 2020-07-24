import React from 'react';
import DateFormatter from 'components/DateFormatter';

interface PolicyProps {
    title: string;
    effectiveDate: string;
    content: string;
}

const Policy: React.FC<PolicyProps> = ({title, effectiveDate, content}) => (
    <React.Fragment>
        <div className="container">
            <section className="policy">
                <h1 className="heading">{title}</h1>
                <p className="subheading">Last updated <DateFormatter dateString={effectiveDate}/></p>
                <div className="content" dangerouslySetInnerHTML={{__html: content}}/>
            </section>
        </div>
        {/* language=CSS */}
        <style jsx>{`
            .container {
                max-width: 1280px;
                display: flex;
                flex-direction: column;
                margin: 0 auto;
                padding: 0 40px;
            }

            .policy {
                margin-top: 10px;
            }

            .heading {
                white-space: pre-line;
                font-size: 52px;
                line-height: 66px;
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                margin-bottom: 26px;
                letter-spacing: 0;
                margin-top: 60px;
            }

            .subheading {
                white-space: pre-line;
                font-size: 20px;
                line-height: 30px;
                color: rgba(11, 37, 75, 0.7);
                margin: 0 0 24px;
                font-family: 'Inter', sans-serif;
            }

            .content {
                font-family: 'Inter', sans-serif;
                line-height: 1.5;
            }

            .content :global(a) {
                color: rgb(11, 37, 75);
                text-decoration: none;
                transition: color 180ms ease-out 0s, border-bottom-color 180ms ease-out 0s;
                border-bottom: 1px solid #1976d2;
            }

            .content :global(a):hover {
                border-bottom-color: transparent;
                color: #1976d2;
            }
        `}</style>
    </React.Fragment>
);

export default Policy;
