import React from 'react';
import { Product } from '../services/products/products';

import { usdFormatter } from '../asstes/currency';

export default function ProductListItem(product: Product) {
    const { name, image, price, description } = product;

    return (
        <>
            <img className="mb-4" src={image} alt={name} />
            <div className="flex flex-col">
                <a className="m-auto font-bold">{name}</a>
                <p className="text-center">{usdFormatter.format(price)}</p>
                <p className="mt-2 text-center text-sm">{description}</p>
            </div>
        </>
    );
}
