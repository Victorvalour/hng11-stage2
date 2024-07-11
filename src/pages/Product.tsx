import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import { useEffect, useState } from "react";
import getProductById from "../services/getProductById";

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  categories: string;
  brand: string;
  price: number;
  quantity: number;
};

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<CartProductType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData: any = await getProductById({ productId: id });
        setProduct(productData);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }
  console.log(product);

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default Product;
