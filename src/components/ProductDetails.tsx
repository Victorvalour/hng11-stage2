import { Link, useParams, useNavigate } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Tab, Tabs } from "./Tabs";
import { Rating } from "@mui/material";
import { formatprice } from "../utils/formatPrice";
import SetQuantity from "./SetQuantity";
import { useCart } from "../hooks/useCart";
import { MdFavoriteBorder } from "react-icons/md";
import Button from "./Button";
import { useCallback, useEffect, useState } from "react";

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  categories: string;
  brand: string;
  price: number;
  quantity: number;
  image: string;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleAddProductToCart, cartProducts } = useCart();

  const [isProductInCart, setIsProductInCart] = useState(false);

  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    categories: product.category,
    brand: product.brand,
    image: product.image,
    quantity: 1,
    price: product.price,
  });
  console.log(cartProduct);

  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity === 99) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: ++prev.quantity };
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }

    setCartProduct((prev) => {
      return { ...prev, quantity: --prev.quantity };
    });
  }, [cartProduct]);
  return (
    <div className="font-poppins">
      <Breadcrumb className="text-primary2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to={`/product/${id}`}>Product details</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="image-info grid grid-cols-1 md:grid-cols-10 gap-12">
        <div className="md:col-span-4">
          <img src={product.image} alt="" />
        </div>
        <div className="md:col-span-6 flex flex-col gap-4">
          <div className="font-semibold text-[#4D4D4D]">
            {<Rating name="product-rating" value={product.rating} readOnly />}
          </div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <div className="flex gap-3">
            <p className="font-semibold">{formatprice(product.price)}</p>
            <p className="text-[#6C7275]">{formatprice(product.oldPrice)}</p>
          </div>

          <hr />
          <div className="flex gap-1">
            <p>Brand: </p> <p>{product.brand}</p>
          </div>
          <hr />

          <div className="flex gap-1 mb-3">
            <p>CATEGORY: </p>
            <div>
              {product.categories.map((category: string) => {
                <p>{category}</p>;
              })}
            </div>
          </div>

          <div className="flex w-full gap-2 justify-between">
            <SetQuantity
              cartCounter={true}
              cartProduct={cartProduct}
              handleQtyIncrease={handleQtyIncrease}
              handleQtyDecrease={handleQtyDecrease}
            />
            <button className="border-2 border-black flex">
              <MdFavoriteBorder /> Wishlist
            </button>
          </div>
          {isProductInCart ? (
            <Button
              outline
              label="View Cart"
              onClick={() => navigate("/cart")}
            />
          ) : (
            <Button
              label="Add to Cart"
              onClick={() => handleAddProductToCart(cartProduct)}
            />
          )}
        </div>
      </div>

      <div>
        <Tabs>
          <Tab label="Descriptions">
            <div className="py-4">
              <h2 className="text-lg font-medium mb-2">Descriptions</h2>
              <p className="text-gray-700"></p>
            </div>
          </Tab>
          <Tab label="Additional information">
            <div className="py-4">
              <h2 className="text-lg font-medium mb-2">Tab 2 Content</h2>
              <p className="text-gray-700">Tab 2 content</p>
            </div>
          </Tab>
          <Tab label="Customer feedback">
            <div className="py-4">
              <h2 className="text-lg font-medium mb-2">Tab 3 Content</h2>
              <p className="text-gray-700">
                This section is for custmer feedbacks.
              </p>
            </div>
          </Tab>
        </Tabs>
      </div>

      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      {/* Fetch and display more product details based on the ID */}
    </div>
  );
};

export default ProductDetails;
