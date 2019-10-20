import React from 'react';
import { Skeleton, Table, ErrorMessage } from 'Components/Common';
import { CompnanyLink } from './Styled';
import { FlexBox, Title } from 'Components/StyledComponents';
import PropTypes from 'prop-types';
import CONFIG from 'CONFIG';

const { style } = CONFIG.stock.card;

function CardBody({ name, open, high, low, isLoading }) {

  const title = isLoading
    ? <Skeleton key="title" height="25px"/>
    :<Title as="h4" key="title" >{ name }</Title>;

  return [
    title,
    <Table
      key="table"
      rows={ [
        [ 'Open', open ],
        [ 'High', high ],
        [ 'Low', low ],
      ]}
      padding="3px 2px"
      isLoading={ isLoading }
    />
  ]

}

function Card(props) {
  const { ticker, error } = props;

  return <FlexBox as="section" wrapRow around center { ...style }>
    <CompnanyLink to={ `/companies/${ ticker }` }>
      {
        error
          ? <ErrorMessage error={ error } top info={ `try to request ${ ticker }` }/>
          : <CardBody { ...props }/>
      }
    </CompnanyLink>
  </FlexBox>

}

Card.defaultProps = {
  name: 'Unknown',
  ticker: '',
  open: 0,
  height: 0,
  low: 0,
  isLoading: true
};

Card.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([undefined])
  ]),
  ticker: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([undefined])
  ]),
  open: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.oneOf([undefined])
  ]),
  high: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.oneOf([undefined])
  ]),
  low: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.oneOf([undefined])
  ]),
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.oneOf([undefined])
  ])
};

export default Card;