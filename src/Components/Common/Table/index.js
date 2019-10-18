import React from 'react';
import { ThemeProvider } from "styled-components";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import Thead from './Thead';
import Trow from './Trow';
import Skeleton from 'Components/Common/Skeleton';
import { StyledTable } from './Styled';


function getTheme(dark, hover, padding) {

  const theme = dark
    ? { fontColor: '#edf2f7', bg: 'transparent' }
    : { fontColor: '#1a202c', bg: 'transparent' };

  return {
    ...theme,
    hover,
    padding
  }

}

function Table({ header, rows, links, onRowClick, history, isLoading, dark, padding, ...props }) {

  function handleRowClick (ticker) {
    if (links) history.push(`/companies/${ticker}`);
    if (onRowClick) onRowClick(); // Addition functionality  on row click
  }

  if (isLoading) return rows.map( (row, index) => (
    <Skeleton key={ index } { ...props } />
  ));

  // If there is no links than table should be without row hover effect
  return <ThemeProvider theme={ getTheme(dark, !!links.length, padding) }>
    <StyledTable>
      <Thead header={ header }/>
      <tbody>
        {
          rows.map( (row, index)=> (
            <Trow
              key={ index }
              row={ row }
              onClick={ () => links && handleRowClick( links[index] ) }
            />
          ))
        }
      </tbody>
    </StyledTable>
  </ThemeProvider>

}

Table.defaultProps = {
  rows: [],
  links: [],
  isLoading: false,
};

Table.propTypes = {
  header: PropTypes.array,
  rows: PropTypes.arrayOf(PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  )).isRequired,
  links: PropTypes.array,
  onRowClick: PropTypes.func,
  history: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  dark: PropTypes.bool,
  padding: PropTypes.string
};

export default withRouter(Table);