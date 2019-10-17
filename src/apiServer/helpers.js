import {api_key} from "../API_KEY";
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
  const response = await axios.get(`https://api-v2.intrinio.com/securities/${ticker}/prices`, {
    params: {
      api_key
    }
  });
  return transormStockResponse(response.data);
};

// All companies request helpers
export const axiosAllCompaniesRequest = async nextPage => {

  const { data } = await axios.get('https://api-v2.intrinio.com/companies', {
    params: {
      api_key,
      page_size: 30,
      next_page: nextPage
    }
  });
  return data;

};

// Search companies request
export const axiosSearchRequest = async query => {

  const { data } = await axios.get('https://api-v2.intrinio.com/companies/search', {
    params: {
      api_key,
      query,
      page_size: 20
    }
  });

  return data

};

// Company request
export const axiosCompanyInfo = async ticker => {
  const { data } = await axios.get(`https://api-v2.intrinio.com/companies/${ticker}`, {
    params: {
      api_key
    }
  });
  return data
};