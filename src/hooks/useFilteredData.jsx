import { useCallback, useEffect, useState } from "react";

const useFilteredData = (storeData, isLoading) => {
  const [filteredData, setFilteredData] = useState(storeData);

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

  return { filteredData, filterData };
};

export default useFilteredData;
