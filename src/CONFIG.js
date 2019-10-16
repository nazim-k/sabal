export const defaultStockTickers = ['IBM','KO','AXP','CVX','XOM','AAPL','NKE','JPM','MCD','MSFT'];
export const companiesTable = {
  columns: [ 'name', 'ticker', 'lei' ], // key of Object that represent column
  header: [ 'Company\'s common name', 'Stock market ticker', 'Legal Entity Identifier' ], // table header
  link: 'ticker' // key value of passes as a key
};
export const debouncePause = 1200;