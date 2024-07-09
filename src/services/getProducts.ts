import {products} from "../utils/products"

export interface IProductParams{
    category?: string | null
    brand?: string | null
    price?: number | null
    rating?: number | null
    tag?: string | null
    searchTerm?: string | null
    
    
}

export default async function getProducts(params: IProductParams) {
    try{
const {category, brand, price, rating, tag, searchTerm} = params
let searchString = searchTerm;

if (!searchTerm) {
    searchString = ''
}
let filteredProducts = products;

if (category) {
    filteredProducts = filteredProducts.filter(product =>
      product.Categories.includes(category)
    );
  }

  if (brand) {
    filteredProducts = filteredProducts.filter(product => product.brand === brand);
  }

  if (price) {
    filteredProducts = filteredProducts.filter(product => parseFloat(product.price) <= price);
  }

  if (searchTerm) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return filteredProducts;

    } catch (error: any) {
throw new Error(error)

    }
}