import { useParams } from "react-router-dom";

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
