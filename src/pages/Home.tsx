/* import { useEffect, useState } from "react"; */
import Search from "../components/Search";
import Sort from "../components/Sort";
/* import getProducts, { IProductParams } from "../services/getProducts"; */
import { products } from "../utils/products";
import ProductCard from "../components/ProductCard";
import { useEffect } from "react";
// import Filter from "../components/Filter";
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
  /*    useEffect(() => {
      const handleLoad = () => {
        const button = document.querySelector('[data-drawer-show="drawer-example"]');
        if (button) {
          button.click();
        }
      };
  
      window.addEventListener('load', handleLoad);
  
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }, []); */
  return (
    <div>
      <div className="md:hidden">
        <Search />
      </div>
      <div className="flex items-center">
        <div className="flex justify-center m-5">
          <button
            className="text-black bg-primary2 focus:ring-4 focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "
            type="button"
            data-drawer-target="drawer-example"
            data-drawer-show="drawer-example"
            aria-controls="drawer-example"
          >
            filter
          </button>
        </div>
        <Sort />
      </div>
      <div>
        {/*   <Filter /> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product: any) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
