import { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import { ProductsData } from "../../types/productTypes";


export const useProducts = (): { data: ProductsData | null, loading: boolean, error: any } => {
    const [data, setData] = useState<ProductsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getProducts();
                setData(result);
            } catch (error: any) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};