const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;
    const isCanary = phase === PHASE_PRODUCTION_BUILD && process.env.CANARY === 'true';
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.CANARY !== 'true';

    const env = {
        NEXT_API_ROUTE: (() => {
            if (isProd) return 'https://typicalbot.com/api';
            if (isCanary) return 'https://canary.typicalbot.com/api';
            if (isDev) return 'http://localhost:3000/api';
        })()
    };

    return {
        env,
        poweredByHeader: false,
        experimental: {
            modern: true,
            redirects() {
                return [
                    {
                        source: '/docs{/}?',
                        permanent: true,
                        destination: '/docs/introduction'
                    }
                ]
            }
        }
    }
}
