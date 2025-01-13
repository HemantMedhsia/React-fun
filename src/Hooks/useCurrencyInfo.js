import axios from "axios";
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setData(response.data[currency]);
      } catch (error) {
        console.error("err", error);
      }
    }

    fetchData();
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
