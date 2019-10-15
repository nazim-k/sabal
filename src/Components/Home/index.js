import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { defaultStockActionCreators } from '../../actionCreators';
import { FlexSection, FlexRow, Title } from "../CommonStyled";
import ErronrMessage from '../ErrorMessage'
import Card from './Card';
import PropTypes from 'prop-types';

function Home({ data, loadDefaultStock, shouldUpdateDefaultStock, isLoading, failError }) {

  useEffect(() => {
    if (shouldUpdateDefaultStock)
      loadDefaultStock();
  }, [loadDefaultStock, shouldUpdateDefaultStock]);

  if (failError) return <ErronrMessage error={ failError } center/>;

  return <FlexSection height="90vh">

    <Title>Stock Prices by Security </Title>

    <FlexRow middle wrapRow>
      {
        data.map( (stock, index) => (
          <Card key={ index } { ...stock } isLoading={ isLoading }/>
        ))
      }
    </FlexRow>
  </FlexSection>

}

Home.defaultProps = {
  shouldUpdateDefaultStock: true,
  isLoading: true,
  failError: null
};

Home.propTypes = {
  data: PropTypes.array.isRequired,
  loadDefaultStock: PropTypes.func.isRequired,
  shouldUpdateDefaultStock: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  failError: PropTypes.object
};



//                CONNECT COMPONENT TO REDUX STORE

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