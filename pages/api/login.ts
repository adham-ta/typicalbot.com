import withSession from '../../hocs/withSession';

export default withSession(async (req, res) => {
    const user = req.session.get('user');

    if (user) {
        res.writeHead(302, {
            Location: '/'
        });
        res.end();
    } else {
        res.writeHead(302, {
            // @ts-ignore
            Location: `https://discord.com/oauth2/authorize?client_id=${process.env.DISCORD_CLIENT_ID}&scope=email+identify+guilds&redirect_uri=${encodeURIComponent(process.env.DISCORD_CALLBACK)}&response_type=code`
        });
        res.end();
    }
});
