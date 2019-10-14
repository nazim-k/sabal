import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { defaultStockActionCreators } from '../../actionCreators';
import { FlexRow, FlexColumn, Title } from "../Styled";
import ErronrMessage from '../ErrorMessage'
import Card from './Card';
import PropTypes from 'prop-types';

function Home(props) {
  const { loadDefaultStock, data, isLoading, lastUpdate, isFail, failError } = props;
  useEffect(() => {
    if (!lastUpdate || new Date() - lastUpdate > 86400)
      loadDefaultStock();
  }, [loadDefaultStock, lastUpdate]);

  if (isFail) return <ErronrMessage center info={ failError }/>;

  return <FlexColumn height="90vh">
    <Title>Stock Prices by Exchange</Title>
    <FlexRow middle wrapRow>
      {
        data.map( (stock, index) => (
          <Card key={ index } { ...stock } isLoading={ isLoading }/>
        ))
      }
    </FlexRow>
  </FlexColumn>

}

Home.propTypes = {
  loadDefaultStock: PropTypes.func,
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  lastUpdate: PropTypes.object,
  isFail: PropTypes.bool,
  failError: PropTypes.string
};

export default connect(
  state => state.defaultStock,
  defaultStockActionCreators
)(Home);