import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import useFilteredData from "../../../hooks/useFilteredData";
import ErrorMessage from "../../shared/ErrorMessage";
import LoadingSpinner from "../../shared/LoadingSpinner";
import ProductCard from "./ProductCard";
import ProductsFilter from "./ProductsFilter";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

export default function Products() {
  const [storeData, isLoading, , , error] = useOutletContext();
  const { filteredData, filterData } = useFilteredData(storeData, isLoading);
  const keyWords = ["all", "men's clothing", "women's clothing", "electronics", "jewelery"];

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
              <Wrapper>
                {filteredData.map(product => <ProductCard key={product.id} product={product} />)}
              </Wrapper>
            )}
        </main>
      )
  );
}
