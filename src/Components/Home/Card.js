import React from 'react';
import styled from 'styled-components';
import { FlexColumn, Table, LinkWrapper } from '../Styled';

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

function Card({ security, open, high, low }) {

  return <CardsContainer bg="#fff" width="18%" height="35%" around center>
    <LinkWrapper to={ `/companies/${ security.ticker }` }>
      <FlexColumn around center>
        <CardTitle>{ security.name }</CardTitle>
        <Table
          rows={ [
            [ 'Ticker', security.ticker ],
            [ 'Open', open ],
            [ 'High', high ],
            [ 'Low', low ],
          ]}
          padding="3px 2px"
          hover={ false }
        />
      </FlexColumn>
    </LinkWrapper>
  </CardsContainer>

}

export default Card;