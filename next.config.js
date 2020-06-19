const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;
    const isCanary = phase === PHASE_PRODUCTION_BUILD && process.env.CANARY === 'true';
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.CANARY !== 'true';

    const env = {
        NEXT_PUBLIC_LOCAL_API: (() => {
            if (isProd) return 'https://typicalbot.com/api';
            if (isCanary) return 'https://canary.typicalbot.com/api';
            if (isDev) return 'http://localhost:3000/api';
        })(),
        NEXT_PUBLIC_DISCORD_API: 'https://discord.com/api'
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
                    },
                    {
                        source: '/changelog',
                        permanent: false,
                        destination: 'https://github.com/sylkellc/typicalbot/blob/3.x/CHANGELOG.md'
                    },
                    {
                        source: '/support',
                        permanent: false,
                        destination: 'https://discord.gg/typicalbot'
                    },
                    {
                        source: '/invite',
                        permanent: false,
                        destination: 'https://discordapp.com/oauth2/authorize?client_id=166527505610702848&permissions=432532567&scope=bot'
                    }
                ]
            }
        }
    }
}
