import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import LoadingSpinner from "../../shared/LoadingSpinner";
import ProductCard from "./ProductCard";
import ProductsFilter from "./ProductsFilter";

export default function Products() {
  const [storeData, isLoading] = useOutletContext();
  const [filteredData, setFilteredData] = useState(storeData);
  const keyWords = ["all", "men's clothing", "women's clothing", "electronics", "jewelery"];

  const filterData = (query) => {
    if (query === "all") {
      setFilteredData(storeData);
    } else {
      setFilteredData(storeData.filter(product => product.category === query));
    }
  };

  return (
    <>
      <ProductsFilter filterData={filterData} keyWords={keyWords} />
      <div>
        {isLoading
          ? <LoadingSpinner />
          : filteredData.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
}
