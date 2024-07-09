import { Link, useParams } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../components/ui/breadcrumb";
import { Tab, Tabs } from "./Tabs";

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
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { id } = useParams();

  console.log(product);

  return (
    <div>
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

      <div>
        <div>Image</div>
        <div>Product info</div>
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium option
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
