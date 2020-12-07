import React, { useEffect, useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { fetchPostJson } from '../lib/fetch-helpers';

const CartSummary: React.FC = () => {
    const [cartEmpty, setCartEmpty] = useState(true);

    const { formattedTotalPrice, cartCount, cartDetails, clearCart, redirectToCheckout } = useShoppingCart();

    useEffect(() => {
        setCartEmpty(!cartCount);
    }, [cartCount]);

    const handleCheckout: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const response = await fetchPostJson('/api/checkout_sessions/cart', cartDetails);

        if (response.statusCode === 500) {
            console.error(response.message);
            return;
        }

        await redirectToCheckout({ sessionId: response.id });
    };

    return (
        <React.Fragment>
            <form onSubmit={handleCheckout}>
                <h2>Cart</h2>
                <p><strong>Items</strong> {cartCount}</p>
                <p><strong>Total</strong> {formattedTotalPrice}</p>
                <button type="submit" disabled={cartEmpty}>Checkout</button>
                <button type="button" onClick={clearCart}>Clear</button>
            </form>
        </React.Fragment>
    );
};

export default CartSummary;
