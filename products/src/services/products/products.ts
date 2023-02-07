export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    longDescription: string;
}

const API_SERVER = 'http://localhost:8080';

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(`${API_SERVER}/products`);

    const products = await response.json();

    return products;
}
