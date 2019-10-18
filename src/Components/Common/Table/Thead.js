import React from 'react';
import PropTypes from 'prop-types';
import { StyledTd } from './Styled';

export default function Thead({ header }) {

  if (!header) return null;

  return (
    <thead>
      <tr>
        {
          header.map( (header, index) => (
            <StyledTd as="th" key={ index } left={ !index }>{ header }</StyledTd>
          ))
        }
      </tr>
    </thead>
  )

}

Thead.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string).isRequired,
    PropTypes.oneOf([null, undefined])
  ])
};