import { NextApiRequest, NextApiResponse } from 'next';
import { validateCartItems } from 'use-shopping-cart/src/serverUtil';
import products from '../../../lib/products.json';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2020-08-27'
});


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const cartItems = req.body;
            const line_items = validateCartItems(products, cartItems);

            const params: Stripe.Checkout.SessionCreateParams = {
                submit_type: 'pay',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_address_collection: {
                    allowed_countries: ['US']
                },
                line_items,
                success_url: `${req.headers.origin}/result?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${req.headers.origin}/checkout`
            };

            const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create(params);

            res.status(200).json(checkoutSession);
        } catch (err) {
            res.status(500).json({ statusCode: 500, message: err.message });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}
