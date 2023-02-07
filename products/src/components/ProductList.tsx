import React, { useState, useEffect } from 'react';

import { getProducts, Product } from '../services/products/products';

export default function ProductList() {
    const [productsList, setProductsList] = useState<Product[]>([]);
    const [isPending, setIsPending] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const products = await getProducts();

                setProductsList(products);
            } catch (err) {
                console.log(err);

                setIsError(true);
            }

            setIsPending(false);
        })();
    }, []);

    if (isPending) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Ups, error ocurred during fetching products.</p>;
    }

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {productsList.map(({ id, image, name }) => (
                <li key={id}>
                    <img src={image} alt={name} />
                </li>
            ))}
        </ul>
    );
}
