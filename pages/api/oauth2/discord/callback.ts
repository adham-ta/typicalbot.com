import fetch from 'lib/fetch';
import withSession from 'hocs/withSession';

export default withSession(async (req, res) => {
    const { code } = req.query;

    const opts = {
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.DISCORD_CALLBACK,
        scope: 'identify email guilds'
    };

    let string = '';

    for (const [key, value] of Object.entries(opts)) {
        if (!value) continue;
        string += `&${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
    }

    try {
        // dispose of accessToken and tokenType after we retrieve the user and guilds
        // @ts-ignore
        const { access_token: accessToken, token_type: tokenType } = await fetch(`${process.env.NEXT_PUBLIC_DISCORD_API}/oauth2/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: string.substring(1)
        });

        const { id, username, discriminator, avatar, email } = await fetch(`${process.env.NEXT_PUBLIC_DISCORD_API}/users/@me`, {
            method: 'GET',
            headers: {
                Authorization: `${tokenType} ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        const user = { isLoggedIn: true, id, username, discriminator, avatar, email };
        req.session.set('user', user);
        await req.session.save();

        // replace to only store a list of guild ids - this will be verified via our api later on
        const guilds = await fetch(`${process.env.NEXT_PUBLIC_DISCORD_API}/users/@me/guilds`, {
            method: 'GET',
            headers: {
                Authorization: `${tokenType} ${accessToken}`,
                'Content-Type': 'application/json'
            }
        });

        req.session.set('guilds', guilds.toString());
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