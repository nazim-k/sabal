import React from 'react';
import { StyledTr, StyledTd } from './Styled';

export default function Trow({ row, onClick }) {

  return <StyledTr onClick={ onClick }>
    {
      row.map( (d, index) => (
        <StyledTd key={ index } left={ !index }>{ d }</StyledTd>
      ))
    }
  </StyledTr>

}