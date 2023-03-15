import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = async (searchKey) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    const API_KEY = "a6e8bd7e88f8039d24bcd9c29cd51230";
    const API_URL = "https://api.themoviedb.org/3";

    const type = searchKey ? "search" : "discover";

    const fetch = async (searchKey) => {
      const {
        data: { results },
      } = await axios.get(`${API_URL}/${type}/movie`, {
        params: {
          api_key: API_KEY,
          query: searchKey,
        },
      });
      console.log(results);
      setData(results);
    };
    fetch();
    setLoading(false);
  }, []);

  return {
    data,
    loading,
  };
};
