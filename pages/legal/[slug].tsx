import React from 'react';
import { PolicyType } from 'types/policy';
import { getAllPolicies, getPolicyBySlug } from '../../lib/policies';
import convertMarkdownToHtml from '../../lib/convertMarkdownToHtml';
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import DateFormatter from 'components/@atoms/date-formatter';

interface Props {
    policy: PolicyType;
}

const Legal = ({ policy }: Props) => {
    const router = useRouter();

    if (!router.isFallback && !policy.slug) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <React.Fragment>
            <h1>{policy.title} - <DateFormatter dateString={policy.effectiveDate} /></h1>
            <div dangerouslySetInnerHTML={{ __html: policy.content }} />
        </React.Fragment>
    );
};

interface Params {
    params: {
        slug: string;
    };
}

export const getStaticProps = async ({ params }: Params) => {
    const policy = getPolicyBySlug(params.slug, [
        'slug',
        'title',
        'effectiveDate',
        'content'
    ]);

    const content = await convertMarkdownToHtml(policy.content || '');

    return {
        props: {
            policy: {
                ...policy,
                content
            }
        }
    };
};

export const getStaticPaths = async () => {
    const policies = getAllPolicies(['slug']);

    return {
        paths: policies.map((policy) => {
            return {
                params: {
                    slug: policy.slug
                }
            };
        }),
        fallback: false
    };
};

export default Legal;
