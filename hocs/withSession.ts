import { withIronSession, Handler } from 'next-iron-session';

const withSession = (handler: Handler) => {
    return withIronSession(handler, {
        password: [
            {
                id: 1,
                // @ts-ignore
                password: process.env.CURRENT_SECRET_COOKIE_PASSWORD
            }
        ],
        cookieName: 'tb.session',
        cookieOptions: {
            secure: process.env.NODE_ENV === 'production'
        }
    });
};

export default withSession;
