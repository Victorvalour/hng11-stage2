import { useParams } from "react-router-dom";

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  categories: string;
  brand: string;
  price: number;
  quantity: number;
};

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      {/* Fetch and display more product details based on the ID */}
    </div>
  );
};

export default ProductDetails;
