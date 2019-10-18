import { api_key } from "API_KEY";
import axios from "axios/index";

// Stock request helpers
const transormStockResponse = data => {
  // Extract needed data from api server response.
  const { adj_open: open, adj_low: low, adj_high: high } = data.stock_prices[0];
  const { name, ticker } = data.security;
  return { name, ticker, open, low, high }
};

export const axiosStockReques = async ticker => {
  // Get stock prices
  try {
    const response = await axios.get(`https://api-v2.intrinio.com/securities/${ticker}/prices`, {
      params: {
        api_key
      }
    });
    return transormStockResponse(response.data);
  } catch(e) {
    const { response } = e;
    if (!response) throw new Error(e.message);
    return { ticker, error: response };

  }
};