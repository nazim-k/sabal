import { axiosStockReques } from './helpers';
import { api_key } from "API_KEY";
import axios from "axios/index";
import CONFIG from 'CONFIG';

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
  const { data } = await axios.get('https://api-v2.intrinio.com/companies', {
    params: {
      api_key,
      page_size: 30,
      next_page: nextPage
    }
  });

  return {
    data: data.companies,
    nextPage: data.next_page
      ? data.next_page
      : CONFIG.companies.nextPageDemo
        ? 'ODc='
        : null
  }
};

export const searchCompanies = async query => {

  const { data } = await axios.get('https://api-v2.intrinio.com/companies/search', {
    params: {
      api_key,
      query,
      page_size: 20
    }
  });
  return data.companies;

};

export const getCompanyInfo = async ticker => {
  const { data } = await axios.get(`https://api-v2.intrinio.com/companies/${ticker}`, {
    params: {
      api_key
    }
  });
  return data
};

export const getCompanyNews = async (ticker, nextPage) => {

  const { data } = await axios.get(`https://api-v2.intrinio.com/companies/${ticker}/news`,  {
    params: {
      api_key,
      page_size: 20,
      next_page: nextPage
    }
  });
  return data
};