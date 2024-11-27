import { useState, useEffect } from "react";
import { LOADING_DELAY_DURATION } from "../constants/constants";

const useFetch = (fetchFunction, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timeoutId;

    const fetchData = async () => {
      try {
        let result;

        result = await fetchFunction(...params);

        timeoutId = setTimeout(() => {
          setData(result);
        }, LOADING_DELAY_DURATION);
      } catch (err) {
        setError(err);
      } finally {
        timeoutId = setTimeout(() => {
          setLoading(false);
        }, LOADING_DELAY_DURATION);
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
