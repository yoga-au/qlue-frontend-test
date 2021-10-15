import { useState, useEffect, useCallback } from "react";
import axios from "axios";

// type import
import type { AxiosResponse } from "axios";
import type { ResponseData } from "../types/ResponseData";

const useFetch = (page: number) => {
  // state definiton
  const [data, setData] = useState<ResponseData | null>(null);

  const fetchData = useCallback(async () => {
    if (localStorage.getItem(`page${page}-qlueFeTestYoga`)) {
      const result = localStorage.getItem(`page${page}-qlueFeTestYoga`);
      setData(result && JSON.parse(result));
      return;
    }

    try {
      const response: AxiosResponse<ResponseData> = await axios.get(
        `people/?page=${page}`
      );
      const result = response.data;
      setData(result);

      if (!localStorage.getItem(`page${page}-qlueFeTestYoga`)) {
        localStorage.setItem(
          `page${page}-qlueFeTestYoga`,
          JSON.stringify({ page, ...result })
        );
      }
    } catch (error) {
      console.error(error);
    }
  }, [page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data };
};

export default useFetch;
