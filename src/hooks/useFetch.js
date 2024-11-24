import { useState, useEffect } from "react";

const useFetch = (fetchFunction, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timeoutId;

    const fetchData = async () => {
      try {
        const result = await fetchFunction(...params);
        timeoutId = setTimeout(() => {
          setData(result);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [fetchFunction, params]);

  return { data, loading, error };
};

export default useFetch;
