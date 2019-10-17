import { axiosStockReques, axiosAllCompaniesRequest, axiosSearchRequest, axiosCompanyInfo } from './helpers';
import {api_key} from "../API_KEY";
import axios from "axios/index";

export const getStockPricesByTicker =  async tickers => {

  if (Array.isArray(tickers)) {
    // Return all stock prices for tickers in array for landing page
    const requests = [];
    tickers.forEach( ticker => requests.push( axiosStockReques(ticker) ));
    return Promise.all(requests);
  }
  throw new Error('getStockPricesByTicker gets an array of tickers as argument')

};

export const getAllCompanies = async nextPage => {
  const { companies, next_page } = await axiosAllCompaniesRequest(nextPage);
  return {
    data: companies,
    nextPage: next_page
  }
};

export const searchCompanies = async query => {
  const { companies } = await axiosSearchRequest(query);
  return companies;
};

export const getCompanyInfo = async ticker => axiosCompanyInfo(ticker);

export const getCompanyNews = async (ticker, nextPage) => {

  const { data } = await axios.get(`https://api-v2.intrinio.com/companies/${'KO'}/news`,  {
    params: {
      api_key,
      page_size: 20,
      next_page: nextPage
    }
  });
  return data
};