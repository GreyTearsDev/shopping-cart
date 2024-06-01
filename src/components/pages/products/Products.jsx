import { useCallback, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ErrorMessage from "../../shared/ErrorMessage";
import LoadingSpinner from "../../shared/LoadingSpinner";
import ProductCard from "./ProductCard";
import ProductsFilter from "./ProductsFilter";

export default function Products() {
  const [storeData, isLoading, , , error] = useOutletContext();
  const [filteredData, setFilteredData] = useState(storeData);
  const keyWords = ["all", "men's clothing", "women's clothing", "electronics", "jewelery"];

  useEffect(() => {
    if (!storeData) return;
    setFilteredData([...storeData]);
  }, [storeData]);

  const filterData = useCallback((query) => {
    if (isLoading) return;
    if (query === "all") {
      setFilteredData(storeData);
    } else {
      setFilteredData(storeData.filter(product => product.category === query));
    }
  }, [storeData, isLoading]);

  return (
    isLoading
      ? <LoadingSpinner />
      : error
      ? <ErrorMessage message="There was an error while fetching the data. Please, refresh the page." />
      : (
        <main>
          <ProductsFilter filterData={filterData} keyWords={keyWords} />
          {filteredData
            && (
              <section>
                {filteredData.map(product => <ProductCard key={product.id} product={product} />)}
              </section>
            )}
        </main>
      )
  );
}
