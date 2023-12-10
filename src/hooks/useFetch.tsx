import { useEffect, useState } from "react";
import { ProductI } from "../interfaces/interfaces";

const useFetch = (url: string) => {
  const [data, setData] = useState<ProductI[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);

      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Something went wrong");
          }

          return response.json();
        })
        .then((result) => {
          setData(result);
          console.log(result)
          setError(null);
        })
        .catch((error) => {
          setError(error.message || "Something went wrong");
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
