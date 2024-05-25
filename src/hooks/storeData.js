import { useEffect, useState } from "react";

export default function useFetchStoreData () {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://fakestoreapi.com/products", { signal })
      .then(response => response.json())
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(error => {
        setError(error)
        setLoading(false);
    });

    
    return () => {
      if (!loading) {
        controller.abort();
      }
    };
  }, []);

  return [data, loading, error];
}

