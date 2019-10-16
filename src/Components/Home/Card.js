import React, { memo } from 'react';
import { CardsContainer, CardTitle } from './Styled';
import { FlexSection, Table, LinkWrapper, TextSkeleton } from '../CommonStyled';
import ErrorMessage from '../ErrorMessage';
import PropTypes from 'prop-types';


function CardBody({ name, ticker, open, high, low, isLoading }) {

  const Title = isLoading
    ? <TextSkeleton key="title" height="25px"/>
    :<CardTitle key="title" >{ name }</CardTitle>;

  return [
    Title,
    <Table
      key="table"
      rows={ [
        [ 'Ticker', ticker ],
        [ 'Open', open ],
        [ 'High', high ],
        [ 'Low', low ],
      ]}
      padding="3px 2px"
      hover={ false }
      isLoading={ isLoading }
    />
  ]

}

function Card(props) {

  const { ticker, error } = props;
  return <CardsContainer bg="#fff" width="18%" height="40%" around center>

    <LinkWrapper to={ `/companies/${ ticker }` }>
      <FlexSection evenly center>
        {
          error
            ? <ErrorMessage error={ error } top info={ `try to request ${ ticker }` }/>
            : <CardBody { ...props }/>
        }
      </FlexSection>
    </LinkWrapper>

  </CardsContainer>

}

Card.propTypes = {
  name: PropTypes.string,
  ticker: PropTypes.string,
  open: PropTypes.number,
  high: PropTypes.number,
  low: PropTypes.number,
  isLoading: PropTypes.bool,
  error: PropTypes.object
};

export default memo( Card );