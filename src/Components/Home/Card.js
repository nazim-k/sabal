import React from 'react';
import styled from 'styled-components';
import { FlexColumn, Table, LinkWrapper, TextSkeleton } from '../Styled';
import ErrorMessage from '../ErrorMessage';

const CardsContainer = styled(FlexColumn)`
  min-width: 120px;
  padding: 8px;
  margin: 8px;
  box-shadow: 0px 5px 10px #cbd5e0;
`;

const CardTitle = styled.p`
  font-weight: bold;
  text-align: center;
`;

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
  return <CardsContainer bg="#fff" width="18%" height="35%" around center>
    <LinkWrapper to={ `/companies/${ ticker }` }>
      <FlexColumn evenly center>
        {
          error
            ? <ErrorMessage error={ error } top info={ `try to request ${ ticker }` }/>
            : <CardBody { ...props }/>
        }
      </FlexColumn>
    </LinkWrapper>
  </CardsContainer>

}

export default Card;