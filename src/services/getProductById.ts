import {products} from "../utils/products"

interface Iparams{
    productId?: string
}


export default async function getProductById(params: Iparams) {
    try {
        const { productId }  = params

       

        if (!productId) {
            throw new Error("Product ID is required");
        }

        const product = products.find(product => product.id === productId);
        
        if(!product) {
            return null
        }


return product

    } catch (error: any) {
        throw new Error(error);
        
    }
}