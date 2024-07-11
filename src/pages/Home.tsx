/* import { useEffect, useState } from "react"; */
import Search from "../components/Search";
import Sort from "../components/Sort";
/* import getProducts, { IProductParams } from "../services/getProducts"; */
import { products } from "../utils/products";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
/* interface HomeProps {
  searchParams: IProductParams;
}
 */
/* { searchParams }: HomeProps */
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /*   const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState<IProductParams>(searchParams); */

  /* useEffect(() => {
    const fetchFilteredProducts = async () => {
      const products: any = await getProducts(filters);
      setFilteredProducts(products);
    };

    fetchFilteredProducts();
  }, [filters]); */

  /*   const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value || null,
    }));
  }; */

  /*   function shuffleArray(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i - 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  } */

  /* const shuffledProducts = shuffleArray(filteredProducts);

  if (filteredProducts.length === 0) {
    return <p>Oops! No products found. Click all to clear filters" </p>;
  } */
  return (
    <div>
      <Search />
      <Sort />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {products.map((product: any) => {
          return <ProductCard key={product.id} data={product} />;
        })}
      </div>
    </div>
  );
};

export default Home;
