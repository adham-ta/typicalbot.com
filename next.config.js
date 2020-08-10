module.exports = {
    poweredByHeader: false,
    experimental: {
        modern: true,
        optimizeImages: true
    },
    async redirects() {
        return [
            {
                source: '/invite{/}?',
                destination: 'https://discordapp.com/oauth2/authorize?client_id=166527505610702848&permissions=432532567&scope=bot',
                permanent: false
            },
            {
                source: '/support{/}?',
                destination: 'https://discord.gg/typicalbot',
                permanent: false
            },
            {
                source: '/join-us{/}?', // use /support instead, this will be removed eventually
                destination: 'https://discord.gg/typicalbot',
                permanent: false
            },
            {
                source: '/docs{/}?',
                destination: 'https://github.com/typicalbot/docs/blob/master/docs/introduction.md',
                permanent: false
            },
            {
                source: '/donate{/}?',
                destination: 'https://www.patreon.com/TypicalBot',
                permanent: false
            }
        ]
    },
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin'
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN'
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff'
                    },
                    {
                        key: 'Feature-Policy',
                        value: "accelerometer 'none'; camera 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; payment 'none'; usb 'none'"
                    }
                ]
            }
        ]
    }
}
