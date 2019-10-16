import { createSelector } from "reselect/lib/index";
import { connect } from "react-redux";
import { defaultStockActionCreators } from "../actionCreators";
import { Home } from '../Components'


const getLastUpdate = defaultStock => defaultStock.lastUpdate;
const shouldUpdateDefaultStock = createSelector(
  [ getLastUpdate ],
  ( lastUpdate ) => !lastUpdate || new Date() - lastUpdate > 86400
);

export default connect(
  ({ defaultStock }) => ({
    shouldUpdateDefaultStock: shouldUpdateDefaultStock(defaultStock),
    ...defaultStock
  }),
  defaultStockActionCreators
)(Home);