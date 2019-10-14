import {api_key} from "../API_KEY";
import axios from "axios/index";


export const axiosStockReques = async ticker => {
  // Get stock prices

  const transormStockResponse = data => {
    // Extract needed data from api server response.
    const { adj_open: open, adj_low: low, adj_high: high } = data.stock_prices[0];
    const { name, ticker } = data.security;
    return { name, ticker, open, low, high }
  };

  try {
    const response = await axios.get(`https://api-v2.intrinio.com/securities/${ticker}/prices`, {
      params: {
        api_key
      }
    });
    return transormStockResponse(response.data);
  } catch (e) {
    return { name: '', ticker, open: 0, low: 0, high: 0, error: e.response }
  }
};