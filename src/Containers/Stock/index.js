import { createSelector } from "reselect";
import { connect } from "react-redux";
import { stockActionCreators } from "actionCreators";
import { Stock } from 'Components';
import CONFIG from 'CONFIG';

const updateFrequency = CONFIG.stock.updateFrequency*60*60;

const getLastUpdate = defaultStock => defaultStock.lastUpdate;
const shouldUpdateDefaultStock = createSelector(
  [ getLastUpdate ],
  ( lastUpdate ) => !lastUpdate || new Date() - lastUpdate > updateFrequency
);

export default connect(
  ({ stock }) => ({
    shouldUpdateDefaultStock: shouldUpdateDefaultStock(stock),
    ...stock
  }),
  stockActionCreators
)(Stock);