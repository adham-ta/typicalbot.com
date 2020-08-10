import React from 'react';
import {useRouter} from 'next/router';
import ErrorPage from 'next/error';
import {Policy as PolicyType} from 'types/policy';
import {getAllPolicies, getPolicyBySlug} from 'lib/policies';
import convertMarkdownToHtml from 'lib/convertMarkdownToHtml';
import Layout from 'components/Layout';
import Policy from 'components/Policy';

interface LegalProps {
    policy: PolicyType;
}

interface Params {
    params: {
        slug: string;
    };
}

const Legal = ({policy}: LegalProps) => {
    const router = useRouter();

    if (!router.isFallback && !policy.slug) {
        return <ErrorPage statusCode={404}/>;
    }

    return (
        <React.Fragment>
            <Layout title={policy.title}>
                <Policy title={policy.title} effectiveDate={policy.effectiveDate} content={policy.content}/>
            </Layout>
            {/* language=CSS */}
            <style jsx global>{`
                body {
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </React.Fragment>
    );
};

export const getStaticProps = async ({params}: Params) => {
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
