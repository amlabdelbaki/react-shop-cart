import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Product from "./product";
import { fetchProducts } from "./../rtk/slices/product-slice";
function ProductList() {
  //   const [products, setProducts] = useState([]);
  const products = useSelector((state) => state.products);
  const searchTerm = useSelector((state)=>state.search);
  const filterProducts = products.filter((product)=>{
    return product.title.toLowerCase().includes(searchTerm.toLowerCase())
  })
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  //   const fetchProducts = () => {
  //     const api = "https://dummyjson.com/products?limit=100";
  //     fetch(api)
  //       .then((res) => res.json())
  //       .then((data) => setProducts(data.products));
  //   };

  return (
    <>
      <div className="row products-container">
        {filterProducts && filterProducts.map((product, index) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
export default ProductList;
