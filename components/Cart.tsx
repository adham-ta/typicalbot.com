import React from 'react';
import { CartProvider } from 'use-shopping-cart';
import getStripe from '../lib/stripe/get-stripejs';

const Cart: React.FC = ({ children }) => (
    <CartProvider mode='checkout-session' stripe={getStripe()} currency='USD'>
        <React.Fragment>
            {children}
        </React.Fragment>
    </CartProvider>
);

export default Cart;
