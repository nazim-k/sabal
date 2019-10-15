import { axiosStockReques, axiosAllCompaniesRequest } from './helpers';

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