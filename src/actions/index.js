/*
There is four main data structure
1. Default stock - rendered by Stock component.
2. All Companies - rendered by Companies component.
3. Company - company info rendered by Company component.
4. Comments - all comments rendered by Company component.
5. News - all related news rendered by Company component.
4. Search - search all companies results rendered by Search Component. Should be clear after unmount Search component

Store ALL ACTIONS in one file to make sure that all actions are unique.
 */

// Default stock actions
export const LOAD_DEFAULT_STOCK = 'LOAD_DEFAULT_STOCK';
export const LOAD_DEFAULT_STOCK_SUCCESS = 'LOAD_DEFAULT_STOCK_SUCCESS';
export const LOAD_DEFAULT_STOCK_FAILURE = 'LOAD_DEFAULT_STOCK_FAILURE';

// All Companies actions
export const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';
export const LOAD_COMPANIES_FAILURE = 'LOAD_COMPANIES_FAILURE';
export const PREVIOUS_COMPANIES_PAGE = 'PREVIOUS_COMPANIES_PAGE';
export const NEXT_COMPANIES_PAGE = 'NEXT_COMPANIES_PAGE';

// Search compnanies actions
export const SEARCH_COMPANIES = 'SEARCH_COMPANIES';
export const SEARCH_COMPANIES_SUCCESS = 'SEARCH_COMPANIES_SUCCESS';
export const SEARCH_COMPANIES_FAILURE = 'SEARCH_COMPANIES_FAILURE';
export const SEARCH_CLEAR_RESULTS = 'SEARCH_CLEAR_RESULTS';

// Company actions
export const LOAD_COMPANY_INFO = 'LOAD_COMPANY_INFO';
export const LOAD_COMPANY_INFO_SUCCESS = 'LOAD_COMPANY_INFO_SUCCESS';
export const LOAD_COMPANY_INFO_FAILURE = 'LOAD_COMPANY_INFO_FAILURE';

// Company Comment Form actions
export const ADD_COMMENT = 'ADD_COMMENT';

// Company Related News actions
export const LOAD_COMPANY_NEWS = 'LOAD_COMPANY_NEWS';
export const LOAD_COMPANY_NEWS_SUCCESS = 'LOAD_COMPANY_NEWS_SUCCESS';
export const LOAD_COMPANY_NEWS_FAILURE = 'LOAD_COMPANY_NEWS_FAILURE';