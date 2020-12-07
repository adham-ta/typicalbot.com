import React from 'react';
import products from '../lib/products.json';
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';

const Products: React.FC = () => {
    const { addItem } = useShoppingCart();

    return (
        <React.Fragment>
            <div className='products'>
                {products.map((product) => (
                    <div className='product' key={product.sku}>
                        <h2>{product.name}</h2>
                        <p className='price'>{formatCurrencyString({
                            value: product.price,
                            currency: product.currency
                        })}</p>
                        <button onClick={() => addItem(product)}>
                            Add
                        </button>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
};

export default Products;
