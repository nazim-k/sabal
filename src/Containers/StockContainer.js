import { createSelector } from "reselect/lib/index";
import { connect } from "react-redux";
import { stockActionCreators } from "actionCreators";
import { Stock } from 'Components'

const getLastUpdate = defaultStock => defaultStock.lastUpdate;
const shouldUpdateDefaultStock = createSelector(
  [ getLastUpdate ],
  ( lastUpdate ) => !lastUpdate || new Date() - lastUpdate > 86400
);

export default connect(
  ({ stock }) => ({
    shouldUpdateDefaultStock: shouldUpdateDefaultStock(stock),
    ...stock
  }),
  stockActionCreators
)(Stock);