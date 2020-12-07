import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/Layout';
import Cart from '../components/Cart';
import CartSummary from '../components/CartSummary';
import Products from '../components/Products';

const Page: NextPage = () => (
    <React.Fragment>
        <Layout title='Checkout'>
            <Cart>
                <CartSummary />
                <Products />
            </Cart>
        </Layout>
    </React.Fragment>
);

export default Page;
