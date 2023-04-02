export interface Product {
    id: number;
    image: string;
    name: string;
    description: string;
    price: string;
    type: string;
}

export interface CartProduct extends Product {
    quantity: number;
}
