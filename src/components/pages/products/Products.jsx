import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../shared/Button";
import LoadingSpinner from "../../shared/LoadingSpinner";
import ProductCard from "./ProductCard";

export default function Products() {
  const [storeData, isLoading] = useOutletContext();
  const [filteredData, setFilteredData] = useState(storeData);

  const filterData = (query) => {
    if (query === "all") {
      setFilteredData(storeData);
    } else {
      setFilteredData(storeData.filter(product => product.category === query));
    }
  };

  return (
    <>
      <div>
        <Button type="normal" text="All" onClick={() => filterData("all")} />
        <Button type="normal" text="Men's Clothing" onClick={() => filterData("men's clothing")} />
        <Button type="normal" text="Women's Clothing" onClick={() => filterData("women's clothing")} />
        <Button type="normal" text="Electronics" onClick={() => filterData("electronics")} />
        <Button type="normal" text="Jewelery" onClick={() => filterData("jewelery")} />
      </div>
      <div>
        {isLoading
          ? <LoadingSpinner />
          : filteredData.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
}
