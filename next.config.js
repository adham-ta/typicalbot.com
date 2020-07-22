const withSourceMaps = require('@zeit/next-source-maps')();
const SentryWebpackPlugin = require('@sentry/webpack-plugin');

module.exports = withSourceMaps({
    poweredByHeader: false,
    experimental: {
        modern: true
    },
    redirects() {
        return [
            {
                source: '/docs{/}?',
                permanent: true,
                destination: '/docs/introduction'
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
    },
    webpack: (config, options) => {
        if (!options.isServer) {
            config.resolve.alias['@sentry/node'] = '@sentry/browser';

            config.node = {
                fs: 'empty'
            }
        }

        // config.plugins.push(
        //     new SentryWebpackPlugin({
        //         include: '.next',
        //         ignore: ['node_modules'],
        //         urlPrefix: '~/_next',
        //         release: options.buildId,
        //     })
        // );

        return config;
    }
});
