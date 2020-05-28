import fetch from '../../lib/fetch';
import withSession from '../../hocs/withSession';

export default withSession(async (req, res) => {
    const { code } = req.query;
    const url = 'https://discord.com/api/oauth2/token';

    const opts = {
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.DISCORD_CALLBACK,
        scope: 'identify email guilds'
    }

    let string = "";

    for (const [key, value] of Object.entries(opts)) {
        if (!value) continue;
        string += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }

    try {
        // @ts-ignore
        const { access_token: accessToken, token_type: tokenType } = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: string.substring(1)
        });

        const auth = { accessToken, tokenType };
        req.session.set('auth', auth);
        await req.session.save();

        const { id, username, discriminator, avatar, email } = await fetch('https://discord.com/api/users/@me', {
            method: 'GET',
            headers: {
                Authorization: `${auth.tokenType} ${auth.accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        const user = { isLoggedIn: true, id, username, discriminator, avatar, email };
        req.session.set('user', user);
        await req.session.save();

        res.writeHead(302, {
            Location: '/'
        });
        res.end();
    } catch (error) {
        const { response: fetchResponse } = error;
        res.status(fetchResponse?.status || 500).json(error.data);
    }
});
