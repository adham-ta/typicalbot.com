module.exports = {
    poweredByHeader: false,
    experimental: {
        modern: true
    },
    redirects() {
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
    }
}
