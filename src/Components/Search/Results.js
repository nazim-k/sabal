import React from 'react';
import { ResultsDiv } from './Styled';
import { LinkWrapper, FlexRow, FlexColumn, Paragraph } from '../Styled';

function Cell({ right, value,  ...props }) {

  return <FlexColumn right={ right }>
    <Paragraph { ...props } padding="0 5px">{ value }</Paragraph>
  </FlexColumn>

}

function Result({ name, ticker, lei}) {

  return <FlexRow height="auto" margin="0 0 10px">
    <LinkWrapper to={ `/companies/${ticker}` }>
      <FlexRow bg="black" around padding="5px 15px">
        {
          [ name, ticker, lei ].map((value, index) => (
            <Cell key={ index } right={ index !== 0 } light value={ value }/>
          ))
        }
      </FlexRow>
    </LinkWrapper>
  </FlexRow>

}

function Results({ companies }) {

  return [
    <FlexRow key="header" height="auto" around padding="5px 15px">
      {
        [ 'Name', 'Ticker', 'LEI' ].map((value, index) => (
          <Cell key={ index } right={ index !== 0 } gray margin="0 0 3px" value={ value }/>
        ))
      }
    </FlexRow>,
    <ResultsDiv key="rows">
    {
      companies.map( (company, index) => <Result key={ index } { ...company }/>)
    }
    </ResultsDiv>
  ]

}

export default Results;