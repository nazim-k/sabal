import React from 'react';
import PropTypes from 'prop-types';
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

Trow.propTypes = {
  row: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  onClick: PropTypes.func
};