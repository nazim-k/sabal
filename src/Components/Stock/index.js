import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FlexBox, Title } from 'Components/StyledComponents';
import { ErrorMessage } from 'Components/Common';
import CONFIG from 'CONFIG';
import Card from './Card';

const height = 100 - CONFIG.header.height;
const { title } = CONFIG.stock;

function Stock({ data, loadDefaultStock, shouldUpdateDefaultStock, isLoading, failError }) {

  useEffect(() => {
    if (shouldUpdateDefaultStock) loadDefaultStock();
  }, [ loadDefaultStock, shouldUpdateDefaultStock ]);

  if (failError) return <ErrorMessage error={ failError } center/>;

  return <FlexBox as="section" height={ `${ height }vh` }>

    <Title>{ title }</Title>

    <FlexBox row middle wrapRow>
      {
        data.map( (stock, index) => (
          <Card key={ index } { ...stock } isLoading={ isLoading }/>
        ))
      }
    </FlexBox>
  </FlexBox>

}

Stock.defaultProps = {
  data: [],
  shouldUpdateDefaultStock: true,
  isLoading: true,
  failError: null
};

Stock.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      ticker: PropTypes.string,
      name: PropTypes.string,
      open: PropTypes.number,
      low: PropTypes.number,
      hight: PropTypes.number
    })
  ])).isRequired,
  loadDefaultStock: PropTypes.func.isRequired,
  shouldUpdateDefaultStock: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  failError: PropTypes.oneOfType([
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
    PropTypes.oneOf([null])
  ])
};

export default Stock