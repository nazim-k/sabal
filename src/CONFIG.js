const comments = [
  { username: 'user1', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { username: 'user2', comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { username: 'user3', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Nec feugiat nisl pretium fusce id velit ut tortor pretium.' },
  { username: 'user4', comment: 'Id donec ultrices tincidunt arcu non sodales. Sit amet est placerat in egestas erat imperdiet sed. Molestie a iaculis at erat pellentesque adipiscing commodo. Integer quis auctor elit sed vulputate mi sit amet. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo.' }
];

export default {

  header: {
    appName: 'Sabal',
    navLinks: {
      Home: '/',
      Companies: '/companies'
    },
    activeLinkStyle: {
      borderBottom: '1px solid #4db74d',
      color: '#4db74d'
    },
    fontSize: '1.1em',
    searchIcon: '/icons/search.svg',
    height: 8, // vh
    sideIndentation: '5%'
  },

  stock: {
    title: 'Stock Prices',
    card: {
      style: {
        bg: '#fff', // background-color
        width: '18%',
        height: "40%",
        padding: '8px',
        margin: '8px',
        boxShadow: '0px 5px 10px #cbd5e0',
        minWidth: '150px'
      }
    },
    updateFrequency: 24 //hours
  },

  companies: {
    title: 'Companies',
    prevButton: 'back',
    nextButton: 'next',
    nextPageDemo: false,
    /*
      if true return next page token from intrinio demo response,
      if server response with next_page=null. Data will be identical.
     */
    style: {
      width: '80%',
      padding: '0 0 25px',
      margin:'auto',
      minWidth: '500px'
    }
  },

  search: {
    placeholder: 'Enter a symbol or a keyword',
    icon: '/icons/search-green.svg',
    label: 'Search',
    infoMsg: 'Submit entry for keyword result'
  },

  company: {
    info: {
      title: 'Company Information',
      keys: {
        ticker: 'Ticker',
        name: 'Name',
        legal_name: 'Legal Name',
        stock_exchange: 'Stock Exchange',
        ceo: 'CEO Name',
        entity_status: 'Entity Status',
        hq_country: 'Head Quarters Country',
        sector: 'Sectors'
      },
      updateFrequency: 24 //hours
    },
    comments: {
      title: 'Comments',
      defaultComments: { AAPL: comments },
      style: {
        textAlign: 'left',
        padding: '5px 0',
        borderTop: '1px solid #a0aec0',
        borderBottom: '1px solid #a0aec0'
      }
    },
    form: {
      usernamePlaceholder: 'Your name',
      commentPlaceholder: 'Comment',
      button: 'comment'
    },
    news: {
      title: 'Related News',
    }
  },

  table: {
    compnaies: {
      columns: [ 'name', 'ticker', 'lei' ],
      header: [ 'Company\'s common name', 'Stock market ticker', 'Legal Entity Identifier' ],
      link: 'ticker'
    }
  },

  errorMessage: {
    401: 'Unauthorized – Your User/Password API Keys are incorrect',
    403: 'Forbidden – You are not subscribed to the data feed requested',
    404: 'Not Found – The endpoint requested does not exist',
    429: 'Too Many Requests – You have hit a limit',
    500: 'Internal Server Error – We had a problem with our server. Try again later.',
    503: 'Service Unavailable',
    default: 'Oops! Something went wrong'
  },

  styledComponents: {
    defaultDivisionBorder: '1px solid #a0aec0'
  },

  defaultStockTickers: ['IBM','KO','AXP','CVX','XOM','AAPL','NKE','JPM','MCD','MSFT'],
  debouncePause: 1000

}